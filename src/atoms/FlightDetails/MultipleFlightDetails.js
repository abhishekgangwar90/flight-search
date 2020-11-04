import React from 'react';
import PropTypes from 'prop-types';

import { getTimeDiff } from '../../utils/app.utils';
import './FlightDetails.scss';

function MultipleFlightsDetails({
  layoverArrivalTime,
  layover,
  layoverDepartureTime,
  layoverFlightNo,
  layoverName,
  arrivalTime,
  departureTime,
  destination,
  flightNo,
  name,
  origin,
}) {
  console.log(
    layoverDepartureTime,
    layoverArrivalTime,
    arrivalTime,
    departureTime
  );
  const renderSection = (title, subTitle) => {
    return (
      <div className="section">
        <div>{title}</div>
        {subTitle && <span>{subTitle}</span>}
      </div>
    );
  };

  return (
    <div className="multipleFlightSection">
      <div className="mainContent">
        {renderSection('X')}
        {renderSection(name, flightNo)}
        {renderSection(departureTime, origin)}
        {renderSection(arrivalTime, layover)}
        {renderSection(getTimeDiff(departureTime, arrivalTime))}
      </div>
      <div className="mainContent">
        {renderSection('X')}
        {renderSection(layoverName, layoverFlightNo)}
        {renderSection(layoverDepartureTime, layover)}
        {renderSection(layoverArrivalTime, destination)}
        {renderSection(getTimeDiff(layoverDepartureTime, layoverArrivalTime))}
      </div>
    </div>
  );
}

MultipleFlightsDetails.propTypes = {
  arrivalTime: PropTypes.string,
  departureTime: PropTypes.string,
  destination: PropTypes.string,
  flightNo: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  layover: PropTypes.string,
  layoverArrivalTime: PropTypes.string,
  layoverDepartureTime: PropTypes.string,
  layoverFlightNo: PropTypes.string,
  layoverName: PropTypes.string,
};

MultipleFlightsDetails.defaultProps = {
  layoverArrivalTime: '',
  layover: '',
  layoverDepartureTime: '',
  layoverFlightNo: '',
  layoverName: '',
  arrivalTime: '',
  departureTime: '',
  destination: '',
  flightNo: '',
  name: '',
  origin: '',
};

export default MultipleFlightsDetails;
