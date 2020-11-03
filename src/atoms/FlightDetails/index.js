import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './FlightDetails.scss';

function FlightDetails({
  arrivalTime,
  departureTime,
  destination,
  flightNo,
  name,
  origin,
  price,
}) {
  const renderSection = (title, subTitle) => {
    return (
      <div className="section">
        <div>{title}</div>
        {subTitle && <span>{subTitle}</span>}
      </div>
    );
  };

  return (
    <div className="flightDetailsContainer">
      <div className="section" style={{ flex: '1 1 5%' }}>
        X
      </div>
      {renderSection(name, flightNo)}
      {renderSection(departureTime, origin)}
      {renderSection(arrivalTime, destination)}
      {renderSection(arrivalTime - departureTime, 'Non Stop')}
      {renderSection(price)}
      <div className="section">
        <Button>Book</Button>
      </div>
    </div>
  );
}

FlightDetails.propTypes = {
  arrivalTime: PropTypes.string,
  departureTime: PropTypes.string,
  destination: PropTypes.string,
  flightNo: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
};

FlightDetails.defaultProps = {
  arrivalTime: '',
  departureTime: '',
  destination: '',
  flightNo: '',
  name: '',
  origin: '',
  price: 0,
};

export default FlightDetails;
