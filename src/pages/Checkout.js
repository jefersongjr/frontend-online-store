import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-fullname">
            Nome Completo
            <input name="input-fullname" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="input-email">
            Email
            <input name="input-email" type="email" data-testid="checkout-email" />
          </label>
          <label htmlFor="input-cpf">
            CPF
            <input name="input-cpf" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="input-phone-number">
            Telefone
            <input name="input-phone-number" data-testid="checkout-phone" />
          </label>
          <label htmlFor="input-cep">
            CEP
            <input name="input-cep" data-testid="checkout-cep" />
          </label>
          <label htmlFor="input-adress">
            Endereço
            <input name="input-adress" data-testid="checkout-address" />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
