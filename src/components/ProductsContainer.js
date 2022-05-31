import React from 'react';
import PropTypes from 'prop-types';

class ProductsContainer extends React.Component {
  render() {
    const { searchItem, onInputChange } = this.props;
    return (
      <div className="search">
        <input
          type="text"
          data-testid="query-input"
          name="searchInput"
          onChange={ onInputChange }
          placeholder="Estou procurando..."
          onKeyPress={ (event) => {
            if (event.key === 'Enter') {
              searchItem();
            }
          } }
        />
        <button
          className="search-button"
          type="button"
          data-testid="query-button"
          onClick={ searchItem }
        >
          <i className="uil uil-search" />
        </button>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchItem: PropTypes.func.isRequired,
};

export default ProductsContainer;
