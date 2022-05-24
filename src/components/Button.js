import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        carrinho de compras
      </Link>
    );
  }
}

export default Button;
