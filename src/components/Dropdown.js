import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  render() {
    const { dropdown, value, onInputChange } = this.props;
    return (
      <div>
        <select
          name={ dropdown }
          value={ value }
          onChange={ onInputChange }
        >
          <option>Most Reviews</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

      </div>
    );
  }
}

Dropdown.propTypes = {
  dropdown: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Dropdown;
