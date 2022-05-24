import React from 'react';
import ProductsContainer from '../components/ProductsContainer';
import Categorias from '../components/Categorias';

class Home extends React.Component {
  render() {
    return (
      <section>
        <ProductsContainer />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categorias />
      </section>
    );
  }
}

export default Home;
