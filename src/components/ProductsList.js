import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  render() {
    const { productsList } = this.props;
    return (
      <div className="products-container">
        { productsList.map((item, index) => (
          <div key={ `item${index}` } className="product" data-testid="product">
            <span>{ item.title }</span>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>{ item.price }</span>
            <Link to={ `/product/details/${item.id}` } data-testid="product-detail-link">
              Ver detalhes
            </Link>
          </div>))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf.isRequired,
};

export default ProductsList;
