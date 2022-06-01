import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import ProductsContainer from './ProductsContainer';
import TrybeStore from '../imgs/TrybeStore.PNG';

const displayNone = 'display-none';

class Header extends React.Component {
  state = {
    menuDisplay: displayNone,
    iconMenu: 'uil-list-ul',
  };

  showMenu = () => {
    const { menuDisplay } = this.state;
    if (menuDisplay === displayNone) {
      this.setState({ menuDisplay: '', iconMenu: 'uil-multiply' });
    } else {
      this.setState({ menuDisplay: displayNone, iconMenu: 'uil-list-ul' });
    }
  };

  render() {
    const { menuDisplay, iconMenu } = this.state;
    const { cartItems, onInputChange, searchItem } = this.props;
    return (
      <header>
        <div className="header-box">
          <Link to="/">
            <img className="logo" src={ TrybeStore } alt="logo da trybe" />
          </Link>
          <ProductsContainer
            onInputChange={ onInputChange }
            searchItem={ searchItem }
          />
          <Button cartItems={ cartItems } />
          <button type="button" onClick={ this.showMenu } className="button-menu">
            <i className={ `uil ${iconMenu} icon` } />
          </button>
        </div>
        <nav className={ `nav-items ${menuDisplay}` }>
          <Link to="/">
            <span className="text-menu">Home</span>
            <i className="uil uil-estate" />
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <span className="text-menu">Cart</span>
            <i className="uil uil-shopping-cart" />
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchItem: PropTypes.func.isRequired,
};

export default Header;
