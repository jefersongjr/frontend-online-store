import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CartProduct from './pages/CartProduct';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    if (!localStorage.getItem('cartItems') === false) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems')),
      });
    }
  }

  addToCart = async ({ target }) => {
    const { cartItems } = this.state;
    const productDecoded = JSON.parse(target.id);
    const newArray = cartItems;
    if (cartItems.every((item) => item.product.id !== productDecoded.id)) {
      const productObject = { quantity: 1, product: productDecoded };
      newArray.push(productObject);
      this.setState(() => ({
        cartItems: newArray,
      }));
    } else if (
      cartItems.some((item) => item.product.id === productDecoded.id)
    ) {
      if (
        cartItems.length === 1
        && cartItems[0].quantity < productDecoded.available_quantity[0]
      ) {
        // PEGAMOS O PRODUTO REMOVIDO
        const changedQuantityProduct = cartItems[0];
        // ALTERAMOS A QUANTIDADE DO PRODUTO REMOVIDO
        changedQuantityProduct.quantity += 1;
        // ADICIONAMOS NOVAMENTE AO ARRAY
        this.setState({ cartItems: [changedQuantityProduct] });
      } else {
        // CRIA O CLONE DO ARRAY PARA ALTERAÇÔES
        const cartCloneArray = cartItems;
        // ACHAMOS O OBJETO DO PRODUTO REMOVIDO
        // PEGAMOS A POSIÇÂO DO PRODUTO REMOVIDO
        const quantityProductIndex = cartCloneArray.findIndex(
          (item) => item.product.id === productDecoded.id,
        );
        // Salvamos o produto removido
        const changedQuantityProduct = cartCloneArray.filter(
          (item) => item.product.id === productDecoded.id,
        )[0];
        // ALTERAMOS O OBJETO DO PRODUTO
        if (
          changedQuantityProduct.quantity
          < changedQuantityProduct.product.available_quantity
        ) {
          changedQuantityProduct.quantity += 1;
          // COLOCAMOS ELE ALTERADO NA MESMA POSIÇÂO
          cartCloneArray[quantityProductIndex] = changedQuantityProduct;
        }
        //  MUDAMOS O ESTADO
        this.setState({ cartItems: cartCloneArray });
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  addProductQuantity = async ({ target }) => {
    const { cartItems } = this.state;
    const { id } = target;
    if (cartItems.length === 1) {
      // PEGAMOS O PRODUTO REMOVIDO
      const changedQuantityProduct = cartItems[0];
      // ALTERAMOS A QUANTIDADE DO PRODUTO REMOVIDO
      if (
        cartItems[0].quantity
        < changedQuantityProduct.product.available_quantity
      ) {
        changedQuantityProduct.quantity += 1;
      }
      // ADICIONAMOS NOVAMENTE AO ARRAY
      this.setState({ cartItems: [changedQuantityProduct] });
    } else {
      // CRIA O CLONE DO ARRAY PARA ALTERAÇÔES
      const cartCloneArray = cartItems;
      // ACHAMOS O OBJETO DO PRODUTO REMOVIDO
      // PEGAMOS A POSIÇÂO DO PRODUTO REMOVIDO
      const quantityProductIndex = cartCloneArray.findIndex(
        (item) => item.product.id === id,
      );
      // Salvamos o produto removido
      const changedQuantityProduct = cartCloneArray.filter(
        (item) => item.product.id === id,
      )[0];
      // ALTERAMOS O OBJETO DO PRODUTO
      if (
        changedQuantityProduct.quantity
        < changedQuantityProduct.product.available_quantity
      ) {
        changedQuantityProduct.quantity += 1;
      }
      // COLOCAMOS ELE ALTERADO NA MESMA POSIÇÂO
      cartCloneArray[quantityProductIndex] = changedQuantityProduct;
      //  MUDAMOS O ESTADO
      this.setState({ cartItems: cartCloneArray });
    }
  };

  removeProductQuantity = ({ target }) => {
    const { id } = target;
    const { cartItems } = this.state;
    // CRIAMOS O CLONE PARA ALTERAÇÂO

    // PEGAMOS O PRODUTO A SER REDUTARE
    const productToRemove = cartItems.filter(
      (item) => item.product.id === id,
    )[0];
    if (productToRemove.quantity !== 1) {
      // CRIA O CLONE DO ARRAY PARA ALTERAÇÔES
      const cartCloneArray = cartItems;
      // PEGAMOS A POSIÇÂO DO PRODUTO REMOVIDO
      const quantityProductIndex = cartCloneArray.findIndex(
        (item) => item.product.id === id,
      );
      // Salvamos o produto removido
      const changedQuantityProduct = cartCloneArray.filter(
        (item) => item.product.id === id,
      )[0];
      // ALTERAMOS O OBJETO DO PRODUTO
      changedQuantityProduct.quantity -= 1;
      // COLOCAMOS ELE ALTERADO NA MESMA POSIÇÂO
      cartCloneArray[quantityProductIndex] = changedQuantityProduct;
      //  MUDAMOS O ESTADO
      this.setState({ cartItems: cartCloneArray });
    }
  };

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                cartItems={ cartItems }
                addToCart={ this.addToCart }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <Cart
                { ...props }
                removeProductQuantity={ this.removeProductQuantity }
                addProductQuantity={ this.addProductQuantity }
                cartItems={ cartItems }
              />
            ) }
          />
          <Route path="/cart/:product" component={ CartProduct } />
          <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } cartItems={ cartItems } /> }
          />
          <Route
            path="/product/details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                cartItems={ cartItems }
                addToCart={ this.addToCart }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
