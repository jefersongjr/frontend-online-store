import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CartItems extends React.Component {
  render() {
    const { cartItems, addProductQuantity, removeProductQuantity } = this.props;
    return (
      <div className="py-5">
        { cartItems.map((item, index) => (
          <ProductCard
            key={ `product${index}` }
            removeProductQuantity={ removeProductQuantity }
            addProductQuantity={ addProductQuantity }
            quantity={ item.quantity }
            item={ item.product }
          />

        )) }

        <div className="flex">
          <div
            className="btn
          btn-success
          button-cart
          flex
          mb-3
          mx-auto"
          >

            <Link
              data-testid="checkout-products"
              to="/checkout"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default CartItems;
