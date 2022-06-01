import React from 'react';
import PropTypes from 'prop-types';
import Categorias from '../components/Categorias';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsList from '../components/ProductsList';

class Home extends React.Component {
  state = {
    productsList: [],
    categoria: '',
    searchInput: '',
    searched: false,
  };

  handleSelectChange = ({ target }) => {
    const { productsList } = this.state;
    if (target.value === 'lowToHigh') {
      this.setState({ productsList: productsList.sort((a, b) => a.price - b.price) });
    }
    if (target.value === 'highToLow') {
      this.setState({ productsList: productsList.sort((a, b) => b.price - a.price) });
    }
    if (target.value === 'sortByPrice') this.searchItem();
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

  render() {
    const { productsList, searched } = this.state;
    const { addToCart, cartItems } = this.props;
    return (
      <section>
        <Header
          cartItems={ cartItems }
          searchItem={ this.searchItem }
          onInputChange={ this.onInputChange }
        />
        <label htmlFor="sort-by-price" onChange={ this.handleSelectChange }>
          <select name="sort-by-price">
            <option value="sortByPrice" selected>Ordenar por preço</option>
            <option value="lowToHigh">Menor Preço</option>
            <option value="highToLow">Maior Preço</option>
          </select>
        </label>
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
