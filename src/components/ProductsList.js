import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  render() {
    const { productsList, addToCart } = this.props;
    return (
      <div className="products-container">
        { productsList.map((item, index) => (
          <div key={ `item${index}` } className="product" data-testid="product">
            <span>{ item.title }</span>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>{ item.price }</span>
            { item.shipping.free_shipping && (
              <span data-testid="free-shipping" className="free-shipping">
                Frete Grátis!
              </span>
            ) }
            <Link
              to={ `/product/details/${item.id}` }
              data-testid="product-detail-link"
            >
              Ver detalhes
            </Link>
            <button
              type="button"
              name="product-add-to-cart"
              data-testid="product-add-to-cart"
              id={ JSON.stringify(item) }
              onClick={ addToCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        )) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
