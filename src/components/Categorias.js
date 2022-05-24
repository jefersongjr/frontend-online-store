import React from 'react';
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

    return (
      <section>
        <div>
          <h3>Categorias:</h3>
        </div>
        { categories.map((categoria) => (
          <div key={ categoria.id }>
            <label
              data-testid="category"
              htmlFor={ categoria.id }
            >
              <input
                type="radio"
                id={ categoria.id }
                name="categoria"
                value={ categoria.name }
              />
              { categoria.name }
            </label>
          </div>
        )) }
      </section>
    );
  }
}

export default Categorias;
