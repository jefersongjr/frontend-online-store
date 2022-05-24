import React from 'react';
import ProductsConteiner from '../components/ProductsContainer';

class Home extends React.Component {
  render() {
    return (
      <section>
        <ProductsConteiner />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
