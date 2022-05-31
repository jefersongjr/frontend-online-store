import React from 'react';
import PropTypes from 'prop-types';
import Categorias from '../components/Categorias';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsList from '../components/ProductsList';
import Dropdown from '../components/Dropdown';

class Home extends React.Component {
  state = {
    productsList: [],
    categoria: '',
    searchInput: '',
    searched: false,
    dropdown: 'Most Reviews',
  };

  componentDidUpdate() {
    this.sortPrice();
  }

  onInputChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'categoria') {
      this.setState({ [name]: value }, this.searchItem); // SE FOR CATEGORIA JA ATUALIZA NO CLICK DO RADIO
    } else {
      this.setState({ [name]: value }); // SE NAO ATUALIZA SOMENTE O ESTADO DO INPUT
    }
  };

  // FUNÇÂO QUE CHAMA A API E ATUALIZA A LISTA DE ITEMS
  searchItem = async () => {
    const { categoria, searchInput } = this.state;
    const itemsFound = await getProductsFromCategoryAndQuery(
      categoria,
      searchInput,
    );
    if (categoria !== '' || searchInput !== '') {
      if (itemsFound.results !== undefined) {
        this.setState({ productsList: itemsFound.results, searched: true });
      } else {
        this.setState({ searched: true });
      }
    }
  };

  sortPrice = () => {
    const { dropdown, productsList } = this.state;
    if (dropdown !== 'Price: Low to High') {
      productsList.sort((a, b) => a.price - b.price);
    } else if (dropdown !== 'Price: High to Low') {
      productsList.sort((b, a) => a.price - b.price);
    }
  }

  render() {
    const { productsList, searched, dropdown } = this.state;
    const { addToCart, cartItems } = this.props;
    return (
      <section>
        <Header
          cartItems={ cartItems }
          searchItem={ this.searchItem }
          onInputChange={ this.onInputChange }
        />

        <Dropdown
          onInputChange={ this.onInputChange }
          dropdown="dropdown"
          value={ dropdown }
        />
        <div className="container">
          {searched && productsList.length === 0 ? (
            'Nenhum produto encontrador'
          ) : (
            <ProductsList productsList={ productsList } addToCart={ addToCart } />
          )}
          {searched === false && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          <Categorias onInputChange={ this.onInputChange } />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf.isRequired,
};

export default Home;
