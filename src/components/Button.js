import React from 'react';
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
      <div className="quantify-container ">
        { sumTotal }
      </div>
    );
  }
}

Button.propTypes = {
  cartItems: PropTypes.string.isRequired,
};

export default Button;
