import React from 'react';
import PropTypes from 'prop-types';

class Slider extends React.Component {
  render() {
    const { imageClass, sliderIndex, slideImageRight, slideImageLeft } = this.props;
    return (
      <div className={ imageClass[sliderIndex] }>
        <button className="slider-btton" type="button" onClick={ slideImageLeft }>
          <i className="uil uil-angle-left-b" />
        </button>
        <button className="slider-btton" type="button" onClick={ slideImageRight }>
          <i className="uil uil-angle-right-b" />
        </button>
      </div>
    );
  }
}

Slider.propTypes = {
  imageClass: PropTypes.arrayOf.isRequired,
  sliderIndex: PropTypes.number.isRequired,
  slideImageRight: PropTypes.func.isRequired,
  slideImageLeft: PropTypes.func.isRequired,
};

export default Slider;
