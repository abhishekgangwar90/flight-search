import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../molecules/FlightList';
import ContentHeader from './ContentHeader';
import './Content.scss';

// takes care if we need to render one way or return UI
function Content({ isOneWay, flightState, flightData }) {
  const { data, isLoading } = flightState;

  const renderFlightContent = () => {
    return (
      flightData &&
      flightData.length !== 0 && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={data.origin}
            destinationCity={data.destination}
            travelDate={data.departureDate}
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
      data.returnDate &&
      data.returnDate !== '' && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={data.destination}
            destinationCity={data.origin}
            travelDate={data.returnDate}
            flightCount={flightData.length}
          />
          <FlightList flightData={flightData} />
        </div>
      )
    );
  };

  return (
    <div className="contentContainer">
      {!isLoading ? (
        <>
          {renderFlightContent()}
          {renderReturnFlightContent()}
        </>
      ) : (
        'loading'
      )}
    </div>
  );
}

Content.propTypes = {
  isOneWay: PropTypes.bool,
  flightData: PropTypes.arrayOf(Object),
  flightState: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.shape({
      origin: PropTypes.string,
      destination: PropTypes.string,
      departureDate: PropTypes.string,
      returnDate: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
};

Content.defaultProps = {
  isOneWay: true,
  flightData: [],
  flightState: {
    isLoading: false,
    data: {
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: '',
    },
    error: null,
  },
};

export default Content;
