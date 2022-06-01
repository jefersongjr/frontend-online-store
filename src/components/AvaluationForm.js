import React from 'react';
import PropTypes from 'prop-types';

class AvaluationForm extends React.Component {
  render() {
    const { onInputChange, sendAvaluation, userEmail, userDescription } = this.props;
    return (
      <section className="user-rating-sec mb-5">
        <div className="rating-container card">
          <div>
            <input
              className="email form-control mb-3"
              type="email"
              value={ userEmail }
              name="userEmail"
              data-testid="product-detail-email"
              placeholder="Seu e-mail"
              onChange={ onInputChange }
            />
            <input
              className="form-check-input mb-3"
              type="radio"
              name="avaluation"
              value="1"
              data-testid="1-rating"
              onChange={ onInputChange }
            />
            <input
              className="form-check-input mb-3"
              type="radio"
              name="avaluation"
              value="2"
              data-testid="2-rating"
              onChange={ onInputChange }
            />
            <input
              className="form-check-input mb-3"
              type="radio"
              name="avaluation"
              value="3"
              data-testid="3-rating"
              onChange={ onInputChange }
            />
            <input
              className="form-check-input mb-3"
              type="radio"
              name="avaluation"
              value="4"
              data-testid="4-rating"
              onChange={ onInputChange }
            />
            <input
              className="form-check-input mb-3"
              type="radio"
              name="avaluation"
              value="5"
              data-testid="5-rating"
              onChange={ onInputChange }
            />
          </div>
          <div>
            <textarea
              className="form-control mb-3 textarea"
              id="userDescription"
              name="userDescription"
              rows="5"
              cols="33"
              value={ userDescription }
              onChange={ onInputChange }
              data-testid="product-detail-evaluation"
            />
          </div>
          <button
            className="btn btn-outline-success"
            type="button"
            data-testid="submit-review-btn"
            onClick={ sendAvaluation }
          >
            Enviar Avaliação
          </button>
        </div>
      </section>
    );
  }
}

AvaluationForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  sendAvaluation: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  userDescription: PropTypes.string.isRequired,
};

export default AvaluationForm;
