import React from 'react';
import PropTypes from 'prop-types';
import AvaluationCard from './AvaluationCard';

class AvaluationBoard extends React.Component {
  render() {
    const { avaluationsSaved } = this.props;
    return (
      <section className="avaluations-saved-sec card mb-5">
        {avaluationsSaved.map((avaluation, index) => (
          <AvaluationCard
            key={ index }
            description={ avaluation.description }
            rate={ avaluation.rate }
            email={ avaluation.email }
          />
        ))}
      </section>
    );
  }
}

AvaluationBoard.propTypes = {
  avaluationsSaved: PropTypes.func.isRequired,
};

export default AvaluationBoard;
