import React from 'react';
import PropTypes from 'prop-types';
import Categorias from '../components/Categorias';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsList from '../components/ProductsList';
import Slider from '../components/Slider';

class Home extends React.Component {
  state = {
    productsList: [],
    categoria: '',
    searchInput: '',
    categoriaClass: 'categorias',
    sliderImage: ['first-image', 'second-image', 'third-image'],
    sliderIndex: 0,
    searched: false,
  };

  handleSelectChange = ({ target }) => {
    const { productsList } = this.state;
    if (target.value === 'lowToHigh') {
      this.setState({
        categoriaClass: 'categorias',
        productsList: productsList.sort((a, b) => a.price - b.price),
      });
    }
    if (target.value === 'highToLow') {
      this.setState({
        categoriaClass: 'categorias',
        productsList: productsList.sort((a, b) => b.price - a.price),
      });
    }
    if (target.value === 'sortByPrice') {
      this.setState({ categoriaClass: 'categorias' });
      this.searchItem();
    }
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'categoria') {
      this.setState(
        { [name]: value, categoriaClass: 'categorias' },
        this.searchItem,
        { categoriaClass: 'categorias-active' },
      ); // SE FOR CATEGORIA JA ATUALIZA NO CLICK DO RADIO
    } else {
      this.setState({ [name]: value }); // SE NAO ATUALIZASOMENTE O ESTADO DO INPUT
    }
  };

  // FUNÇÂO QUE VAI TROCAR A CLASSE DA CATEGORIA
  changeCategoryClass = () => {
    this.setState(() => ({ categoriaClass: 'categorias-active' }));
  };

  // FUNÇÂO QUE CHAMA A API E ATUALIZA A LISTA DE ITEMS
  searchItem = async () => {
    const { categoria, searchInput } = this.state;
    this.setState({ loading: true });
    const itemsFound = await getProductsFromCategoryAndQuery(
      categoria,
      searchInput,
    );
    if (categoria !== '' || searchInput !== '') {
      if (itemsFound.results !== undefined) {
        this.setState({
          productsList: itemsFound.results,
          searched: true,
          loading: false,
        });
      } else {
        this.setState({ searched: true, loading: false });
      }
    }
  };

  // TROCA A IMAGEM PARA A DIREITA

  slideImageRight = () => {
    const { sliderImage, sliderIndex } = this.state;
    if (sliderIndex === sliderImage.length - 1) {
      this.setState({ sliderIndex: 0 });
    } else {
      this.setState({ sliderIndex: sliderIndex + 1 });
    }
  };

  slideImageLeft = () => {
    const { sliderImage, sliderIndex } = this.state;
    if (sliderIndex === 0) {
      this.setState({ sliderIndex: sliderImage.length - 1 });
    } else {
      this.setState({ sliderIndex: sliderIndex - 1 });
    }
  };

  render() {
    const {
      productsList,
      searched,
      categoriaClass,
      sliderImage,
      sliderIndex,
      loading,
    } = this.state;
    const { addToCart, cartItems } = this.props;
    return (
      <>
        <Header
          cartItems={ cartItems }
          searchItem={ this.searchItem }
          onInputChange={ this.onInputChange }
        />
        <Slider
          imageClass={ sliderImage }
          sliderIndex={ sliderIndex }
          slideImageRight={ this.slideImageRight }
          slideImageLeft={ this.slideImageLeft }
        />
        <div className="center-me">
          { loading
            ? (
              <div className="c-loader" />
            )
            : ''}
        </div>
        <div className="container">
          {searched && productsList.length === 0
            ? 'Nenhum produto encontrador'
            : searched && (
              <ProductsList
                productsList={ productsList }
                addToCart={ addToCart }
              />
            )}
          {searched === false && (
            <div className="products-container">
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          )}
          <div className="filter">
            <button
              type="button"
              className="slider-btton"
              onClick={ this.changeCategoryClass }
            >
              <i className="uil uil-exchange-alt" />
              Ordenar
            </button>
          </div>
          <Categorias
            categoriaClass={ categoriaClass }
            onInputChange={ this.onInputChange }
            handleSelectChange={ this.handleSelectChange }
          />
        </div>
      </>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf.isRequired,
};

export default Home;
