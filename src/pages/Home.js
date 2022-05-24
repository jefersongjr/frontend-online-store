import React from 'react';
import ProductsContainer from '../components/ProductsContainer';
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
  }

  onInputChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'categoria') {
      this.setState({ [name]: value }, this.searchItem); // SE FOR CATEGORIA JA ATUALIZA NO CLICK DO RADIO
    } else {
      this.setState({ [name]: value }); // SE NAO ATUALIZA SOMENTE O ESTADO DO INPUT
    }
  }
  // FUNÇÂO QUE CHAMA A API E ATUALIZA A LISTA DE ITEMS
  searchItem = async () => {
    const { categoria, searchInput } = this.state;
    const itemsFound = await getProductsFromCategoryAndQuery(categoria, searchInput);
    if (itemsFound.results !== undefined) {
      this.setState({ productsList: itemsFound.results, searched: true });
    } else {
      this.setState({ searched: true });
    }
  }

  render() {
    const { productsList, searched } = this.state;
    return (
      <section>
        <Header />
        <ProductsContainer
          onInputChange={ this.onInputChange }
          searchItem={ this.searchItem }
        />
        <div className="container">
          {searched && (productsList.length === 0)
            ? 'Nenhum produto encontrador'
            : <ProductsList productsList={ productsList } />}
          {searched === false && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>) }
          <Categorias onInputChange={ this.onInputChange } />
        </div>
      </section>
    );
  }
}

export default Home;
