import React from 'react';
import ProductsContainer from '../components/ProductsContainer';

class Home extends React.Component {
  render() {
    return (
      <section>
        <ProductsContainer />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
