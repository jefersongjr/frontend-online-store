import React from 'react';

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

export default Dropdown;
