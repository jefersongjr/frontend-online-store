import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CartItems extends React.Component {
  render() {
    const { cartItems, addProductQuantity, removeProductQuantity } = this.props;
    return (
      <div>
        {cartItems.map((item, index) => (
          <ProductCard
            key={ `product${index}` }
            removeProductQuantity={ removeProductQuantity }
            addProductQuantity={ addProductQuantity }
            quantity={ item.quantity }
            item={ item.product }
          />
        ))}
      </div>
    );
  }
}

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default CartItems;
