import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './FlightDetails.scss';
import { currencySeparator, getTimeDiff } from '../../utils/app.utils';
import MultipleFlightsDetails from './MultipleFlightDetails';

function FlightDetails(props) {
  const {
    arrivalTime,
    departureTime,
    destination,
    flightNo,
    name,
    origin,
    price,
    isLayoverFlight,
    layoverArrivalTime,
    passengerCount,
  } = props;
  const [canShowMultiple, setCanShowMultiple] = React.useState(false);

  const renderSection = (title, subTitle) => {
    return (
      <div className="section">
        <div>{title}</div>
        {subTitle && <span>{subTitle}</span>}
      </div>
    );
  };

  const renderShowDetailsOption = () => {
    return (
      <button
        type="button"
        onClick={() => setCanShowMultiple(!canShowMultiple)}
      >
        {canShowMultiple ? 'Hide Details' : 'Show Details'}
      </button>
    );
  };

  return (
    <div className="flightDetailsContainer">
      <div className="mainContent">
        <div className="section" style={{ flex: '1 1 5%' }}>
          X
        </div>
        {isLayoverFlight
          ? renderSection('Multiple Flights', renderShowDetailsOption())
          : renderSection(name, flightNo)}
        {renderSection(departureTime, origin)}
        {renderSection(
          isLayoverFlight ? layoverArrivalTime : arrivalTime,
          destination
        )}
        {renderSection(
          getTimeDiff(
            departureTime,
            isLayoverFlight ? layoverArrivalTime : arrivalTime
          ),
          isLayoverFlight ? (
            <span className="green">Total Duration</span>
          ) : (
            'Non Stop'
          )
        )}
        {renderSection(
          <span className="price">
            &#8377;{currencySeparator(price * passengerCount)}
          </span>
        )}
        <div className="section">
          <Button>Book</Button>
        </div>
      </div>
      {canShowMultiple && <MultipleFlightsDetails {...props} />}
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
  isLayoverFlight: PropTypes.bool,
  layoverArrivalTime: PropTypes.string,
  layover: PropTypes.string,
  layoverDepartureTime: PropTypes.string,
  layoverFlightNo: PropTypes.string,
  layoverName: PropTypes.string,
  passengerCount: PropTypes.string,
};

FlightDetails.defaultProps = {
  arrivalTime: '',
  departureTime: '',
  destination: '',
  flightNo: '',
  name: '',
  origin: '',
  price: 0,
  isLayoverFlight: false,
  layoverArrivalTime: '',
  layover: '',
  layoverDepartureTime: '',
  layoverFlightNo: '',
  layoverName: '',
  passengerCount: '',
};

export default FlightDetails;
