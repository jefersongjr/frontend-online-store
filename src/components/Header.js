import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Button />
        <Link to="/">Home</Link>
      </header>
    );
  }
}

export default Header;
