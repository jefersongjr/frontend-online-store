import React from 'react';

class Slider extends React.Component {
  render() {
    return (
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade shadow-5-strong"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="text-center text-white">
              <h1>Smart Watchs</h1>
            </div>
          </div>

          <div className="carousel-item">
            <div className="text-center text-white">
              <h1>Smsart Watchs</h1>
            </div>
          </div>

          <div className="carousel-item">
            <div className="text-center text-white">
              <h1>Smsart Watchs</h1>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
