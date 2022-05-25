import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getProductsDetailsByID from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.getProductsDetailsByID();
  }

  getProductsDetailsByID = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsDetailsByID(id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { addToCart, match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <Header />
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          id={ id }
          onClick={ addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
