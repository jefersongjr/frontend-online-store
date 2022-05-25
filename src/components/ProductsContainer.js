import React from 'react';
import PropTypes from 'prop-types';

class ProductsContainer extends React.Component {
  render() {
    const { searchItem, onInputChange } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="searchInput"
          onChange={ onInputChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ searchItem }
        >
          Search
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
