import React from 'react';
import PropTypes from 'prop-types';
import CartItems from '../components/CartItems';
import Header from '../components/Header';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <Header />
        { cartItems.length !== 0
          ? <CartItems cartItems={ cartItems } />
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }

      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
};

export default Cart;
