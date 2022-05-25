import React from 'react';
import PropTypes from 'prop-types';
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
    const { title, price, thumbnail } = product;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
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
};
