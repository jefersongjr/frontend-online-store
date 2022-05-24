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
    this.setState({ [name]: value });
  }

  searchItem = async () => {
    const { categoria, searchInput } = this.state;
    const itemsFound = await getProductsFromCategoryAndQuery(categoria, searchInput);

    console.log(itemsFound);
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
