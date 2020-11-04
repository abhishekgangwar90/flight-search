import React from 'react';
import PropTypes from 'prop-types';
import FlightDetails from '../../atoms/FlightDetails';
import './FlightList.scss';

function FlightList({ flightData }) {
  console.log(flightData);
  return (
    <div className="flightListContainer">
      {flightData.map((elm) => {
        return <FlightDetails key={elm.flightNo} {...elm} />;
      })}
    </div>
  );
}

FlightList.propTypes = {
  flightData: PropTypes.arrayOf(Object),
};

FlightList.defaultProps = {
  flightData: [],
};

export default FlightList;
