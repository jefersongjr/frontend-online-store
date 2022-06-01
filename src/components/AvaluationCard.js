import React from 'react';
import PropTypes from 'prop-types';

class AvaluationCard extends React.Component {
  render() {
    const { email, rate, description } = this.props;
    return (
      <div className="card mb-3 p-3">
        <div>
          <span>
            e-mail:
            { email }
          </span>
        </div>
        <span>
          Nota:
          { rate }
        </span>
        <p>
          Comentário:
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
