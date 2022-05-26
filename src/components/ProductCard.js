import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item, quantity, addProductQuantity, removeProductQuantity } = this.props;
    return (
      <div key={ item.id }>
        <h2 data-testid="shopping-cart-product-name">{`${item.title}`}</h2>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>{item.price * quantity}</p>
        <div className="flex">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ removeProductQuantity }
            id={ item.id }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id={ item.id }
            onClick={ addProductQuantity }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf.isRequired,
  quantity: PropTypes.number.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
