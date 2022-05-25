import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CartProduct from './pages/CartProduct';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import getProductsDetailsByID from './services/api';

class App extends React.Component {
  state = {
    cartItems: [],
  }

  addToCart = async ({ target }) => {
    const { id } = target;
    const productToAdd = await getProductsDetailsByID(id);
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, productToAdd],
    }));
    console.log(id);
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.addToCart } /> }
          />
          <Route
            path="/cart"
            render={ (props) => <Cart { ...props } cartItems={ cartItems } /> }
          />
          <Route path="/cart/:product" component={ CartProduct } />
          <Route path="/checkout" component={ Checkout } />
          <Route
            path="/product/details/:id"
            render={ (props) => (
              <ProductDetails { ...props } addToCart={ this.addToCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
