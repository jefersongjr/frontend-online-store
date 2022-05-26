import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { cartItems } = this.props;
    let sumTotal = 0;
    if (cartItems.length !== 0) {
      const arrayQuantity = cartItems.map((item) => item.quantity);
      sumTotal = arrayQuantity.reduce((item, acc) => acc + item);
    }
    return (
      <div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          carrinho de compras
        </Link>
        <div className="quantify-container ">
          <p data-testid="shopping-cart-size">
            { sumTotal }
          </p>
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  cartItems: PropTypes.string.isRequired,
};

export default Button;
