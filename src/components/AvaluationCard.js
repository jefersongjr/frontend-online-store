import React from 'react';
import PropTypes from 'prop-types';

class AvaluationCard extends React.Component {
  render() {
    const { email, rate, description } = this.props;
    return (
      <div>
        <div>
          <span>{ email }</span>
        </div>
        <span>{ rate }</span>
        <p>
          { description }
        </p>
      </div>
    );
  }
}

AvaluationCard.propTypes = {
  email: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AvaluationCard;
