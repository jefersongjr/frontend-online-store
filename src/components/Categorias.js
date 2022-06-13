import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.SetCategoriesState(categories);
  }

  SetCategoriesState = (categories) => {
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;
    const { onInputChange, handleSelectChange, categoriaClass } = this.props;
    return (
      <section className={ categoriaClass }>
        <div>
          <h3 className="title-text">Categorias:</h3>
          <label htmlFor="sort-by-price">
            <select name="sort-by-price" onChange={ handleSelectChange }>
              <option value="sortByPrice" selected>
                Ordenar por preço
              </option>
              <option value="lowToHigh">Menor Preço</option>
              <option value="highToLow">Maior Preço</option>
            </select>
          </label>
        </div>
        {categories.map((categoria) => (
          <div key={ categoria.id }>
            <label data-testid="category" htmlFor={ categoria.id }>
              <input
                type="radio"
                id={ categoria.id }
                name="categoria"
                value={ categoria.id }
                onClick={ onInputChange }
              />
              {categoria.name}
            </label>
          </div>
        ))}
      </section>
    );
  }
}

Categorias.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  categoriaClass: PropTypes.string.isRequired,
};

export default Categorias;
