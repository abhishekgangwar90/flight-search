/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import FlightDetails from '../../atoms/FlightDetails';
import './FlightList.scss';

function FlightList({ flightData, passengerCount }) {
  return (
    <div className="flightListContainer">
      {flightData.map((elm, index) => {
        // not a good practice to do, but api doesn't return id in response
        return (
          <FlightDetails key={index} passengerCount={passengerCount} {...elm} />
        );
      })}
    </div>
  );
}

FlightList.propTypes = {
  flightData: PropTypes.arrayOf(Object),
  passengerCount: PropTypes.string,
};

FlightList.defaultProps = {
  flightData: [],
  passengerCount: '0',
};

export default FlightList;
