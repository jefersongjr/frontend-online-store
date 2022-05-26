import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class Header extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <header>
        <Button cartItems={ cartItems } />
        <Link to="/">Home</Link>
      </header>
    );
  }
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
};

export default Header;
