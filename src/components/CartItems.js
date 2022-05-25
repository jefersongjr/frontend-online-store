import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        { cartItems.map((item) => (
          <div key={ item.id }>
            <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{item.price}</p>
            <div className="flex">
              <button type="button">
                +
              </button>
              <p data-testid="shopping-cart-product-quantity">1</p>
              <button type="button">
                -
              </button>
            </div>
          </div>
        )) }
      </div>
    );
  }
}

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
};

export default CartItems;
