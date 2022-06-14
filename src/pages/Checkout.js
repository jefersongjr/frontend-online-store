import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Checkout extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <Header cartItems={ cartItems } />
        <form className="checkout">
          <label className="label-form-item" htmlFor="input-fullname">
            Nome
            <input name="input-fullname" data-testid="checkout-fullname" />
          </label>
          <label className="label-form-item" htmlFor="input-email">
            Email
            <input
              name="input-email"
              type="email"
              data-testid="checkout-email"
            />
          </label>
          <label className="label-form-item" htmlFor="input-cpf">
            CPF
            <input name="input-cpf" data-testid="checkout-cpf" />
          </label>
          <label className="label-form-item" htmlFor="input-phone-number">
            Telefone
            <input name="input-phone-number" data-testid="checkout-phone" />
          </label>
          <label className="label-form-item" htmlFor="input-cep">
            CEP
            <input name="input-cep" data-testid="checkout-cep" />
          </label>
          <label className="label-form-item" htmlFor="input-adress">
            Endereço
            <input name="input-adress" data-testid="checkout-address" />
          </label>
          <button className="finalize-button" type="button">
            Finalizar compra
          </button>
        </form>
      </>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
};

export default Checkout;
