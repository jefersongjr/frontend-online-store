import React from 'react';
import PropTypes from 'prop-types';
import CartItems from '../components/CartItems';
import Header from '../components/Header';

class Cart extends React.Component {
  render() {
    const { cartItems, addProductQuantity, removeProductQuantity } = this.props;
    return (
      <div>
        <Header cartItems={ cartItems } />
        {cartItems.length !== 0 ? (
          <CartItems
            cartItems={ cartItems }
            removeProductQuantity={ removeProductQuantity }
            addProductQuantity={ addProductQuantity }
          />
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default Cart;
