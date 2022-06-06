import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  render() {
    const { productsList, addToCart } = this.props;
    return (
      <div className="products-container">
        {productsList.map((item, index) => (
          <div key={ `item${index}` } className="product card" data-testid="product">
            <img
              className="product-image"
              src={ item.thumbnail }
              alt={ item.title }
            />
            <span>
              R$
              { item.price }
            </span>
            {item.shipping.free_shipping && (
              <span data-testid="free-shipping" className="free-shipping">
                Frete Grátis!
              </span>
            )}
            <Link
              to={ `/product/details/${item.id}` }
              data-testid="product-detail-link"
              className="button-link"
            >
              Ver detalhes
              {' '}
              <i className="uil uil-ellipsis-v" />
            </Link>
            <button
              type="button"
              name="product-add-to-cart"
              className="cart-button"
              data-testid="product-add-to-cart"
              id={ JSON.stringify(item) }
              onClick={ addToCart }
            >
              Adicionar ao Carrinho
            </button>
            <span className="item-title">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
