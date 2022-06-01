import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getProductsDetailsByID from '../services/api';
import AvaluationForm from '../components/AvaluationForm';
import AvaluationBoard from '../components/AvaluationBoard';

class ProductDetails extends React.Component {
  state = {
    product: '',
    userEmail: '',
    avaluation: '0',
    userDescription: '',
    avaluationsSaved: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductsDetailsByID(id);
    this.setState(() => ({ product }));
  }

  sendAvaluation = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // PEGAMOS OS DADOS NO ESTADO
    const { avaluation, userEmail, userDescription, avaluationsSaved } = this.state;
    // CRIAMOS UM OBJETO
    const productAvaluation = {
      email: userEmail,
      description: userDescription,
      rate: avaluation,
    };
    // CLONAMOS O ARRAY
    let cloneArray = [];
    cloneArray = [...avaluationsSaved];
    // LANÇAMOS O OBJETO NO ARRAY
    cloneArray.push(productAvaluation);
    // SALVAMOS NO ESTADO
    this.setState({
      avaluationsSaved: cloneArray,
      userEmail: '',
      avaluation: '0',
      userDescription: '',
    });
    // SALVAMOS NO LOCAL STORAGE AS AV DO PRODUTO
    localStorage.setItem(id, JSON.stringify(cloneArray));
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      addToCart,
      match: {
        params: { id },
      },
      cartItems,
    } = this.props;
    const { product, userEmail, avaluation, userDescription } = this.state;
    const { title, price, thumbnail } = product;
    let savedAvaluations;
    // VERIFICAMOS SE TEM ALGO NESSE LOCAL STORAGE
    if (!localStorage.getItem(id)) {
      // SE NAO TIVER RETORNA VAZIO
      savedAvaluations = [];
    } else {
      // SE TIVER RETORNA O ARRAY
      savedAvaluations = JSON.parse(localStorage.getItem(id));
    }
    return (
      <>
        <Header cartItems={ cartItems } />
        <main>
          <section
            className="container-fluid
            py-4
            card
            detailsPage
            space-between"
          >

            <div className="m-3">
              <img src={ thumbnail } alt={ title } />
            </div>

            <div className="fs-1 ms-1 mt-3 detailsInfo">

              <h2 data-testid="product-detail-name">{ title }</h2>

              <p>
                R$
                { price }
              </p>
              <button
                className="btn btn-success button"
                type="submit"
                data-testid="product-detail-add-to-cart"
                id={ JSON.stringify(product) }
                onClick={ addToCart }
              >
                Adicionar ao Carrinho
              </button>

            </div>

          </section>
          <AvaluationForm
            className="mb-5"
            userEmail={ userEmail }
            avaluation={ avaluation }
            userDescription={ userDescription }
            sendAvaluation={ this.sendAvaluation }
            onInputChange={ this.onInputChange }
          />
          <AvaluationBoard avaluationsSaved={ savedAvaluations } />
        </main>
      </>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf.isRequired,
};
