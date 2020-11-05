import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../molecules/FlightList';
import ContentHeader from './ContentHeader';
import './Content.scss';

// takes care if we need to render one way or return UI
function Content({ flightState, flightData, returnFlightData }) {
  const { data, isLoading } = flightState;

  const renderFlightContent = () => {
    return (
      flightData &&
      flightData.length !== 0 && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={flightData[0].origin}
            destinationCity={flightData[0].destination}
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
      returnFlightData &&
      returnFlightData.length > 0 && (
        <div className="flightsContainer">
          <ContentHeader
            originCity={flightData[0].destination}
            destinationCity={flightData[0].origin}
            travelDate={data.returnDate}
            flightCount={returnFlightData.length}
          />
          <FlightList flightData={returnFlightData} />
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
  flightData: PropTypes.arrayOf(Object),
  returnFlightData: PropTypes.arrayOf(Object),
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
  flightData: [],
  returnFlightData: [],
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
