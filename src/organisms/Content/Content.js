import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../molecules/FlightList';
import ContentHeader from './ContentHeader';
import './Content.scss';

// takes care if we need to render one way or return UI
function Content({ isOneWay, flightState, flightData }) {
  const renderFlightContent = () => {
    return (
      flightState &&
      flightData.length !== 0 && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={flightState.origin}
            destinationCity={flightState.destination}
            travelDate={flightState.travelDate}
            flightCount={flightData.length}
          />
          <FlightList flightData={flightData} />
        </div>
      )
    );
  };

  const renderReturnFlightContent = () => {
    return (
      !isOneWay &&
      flightState.returnDate &&
      flightState.returnDate !== '' && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={flightState.destination}
            destinationCity={flightState.origin}
            travelDate={flightState.returnDate}
            flightCount={flightData.length}
          />
          <FlightList flightData={flightData} />
        </div>
      )
    );
  };

  return (
    <div className="contentContainer">
      {renderFlightContent()}
      {renderReturnFlightContent()}
    </div>
  );
}

Content.propTypes = {
  isOneWay: PropTypes.bool,
  flightData: PropTypes.arrayOf(Object),
  flightState: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    travelDate: PropTypes.string,
    returnDate: PropTypes.string,
  }),
};

Content.defaultProps = {
  isOneWay: true,
  flightData: [],
  flightState: { origin: '', destination: '', travelDate: '', returnDate: '' },
};

export default Content;
