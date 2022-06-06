import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item, quantity, addProductQuantity, removeProductQuantity } = this.props;
    return (

      <div
        key={ item.id }
        className="card
          cart
          mb-3
          mt-1
          card-center"
      >

        <div className="flex mb-3 card-center">

          <img src={ item.thumbnail } alt={ item.title } />

          <div className="mx-2 flex card-descriptions">
            <div className="card-width">

              <h2 data-testid="shopping-cart-product-name">{ `${item.title}` }</h2>

              { item.shipping.free_shipping && (
                <span data-testid="free-shipping" className="free-shipping">
                  Frete Grátis!
                </span>
              ) }

            </div>

            <div className="centerp">
              <p>
                R$
                { item.price * quantity }
              </p>
            </div>
          </div>
        </div>

        <div className="flex end">
          <button
            className="btn btn-qtd btn-outline-success"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ removeProductQuantity }
            id={ item.id }
          >
            -
          </button>
          <div
            data-testid="shopping-cart-product-quantity"
            className="btn"
          >
            { quantity }
          </div>
          <button
            className="btn btn-qtd btn-outline-success"
            data-testid="product-increase-quantity"
            type="button"
            id={ item.id }
            onClick={ addProductQuantity }
          >
            +
          </button>
        </div>

      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf.isRequired,
  quantity: PropTypes.number.isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeProductQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
