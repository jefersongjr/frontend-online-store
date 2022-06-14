import React from 'react';
import PropTypes from 'prop-types';
import CartItems from '../components/CartItems';
import Header from '../components/Header';

class Cart extends React.Component {
  render() {
    const { cartItems, addProductQuantity, removeProductQuantity } = this.props;
    return (
      <>

        <Header cartItems={ cartItems } />

        { cartItems.length !== 0 ? (

          <section className="cart-full">
            <CartItems
              cartItems={ cartItems }
              removeProductQuantity={ removeProductQuantity }
              addProductQuantity={ addProductQuantity }
            />
          </section>

        ) : (

          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>

        ) }

      </>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default Cart;
