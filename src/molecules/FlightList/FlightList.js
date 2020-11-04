import React from 'react';
import PropTypes from 'prop-types';
import FlightDetails from '../../atoms/FlightDetails';
import './FlightList.scss';

function FlightList({ flightData }) {
  return (
    <div className="flightListContainer">
      {flightData.map((elm, index) => {
        // not a good practice to do, but api doesn't return id in response
        // eslint-disable-next-line react/no-array-index-key
        return <FlightDetails key={index} {...elm} />;
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
