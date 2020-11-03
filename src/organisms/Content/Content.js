import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../molecules/FlightList';
import ContentHeader from './ContentHeader';
import './Content.scss';

// takes care if we need to render one way or return UI
function Content({ isOneWay }) {
  return (
    <div className="contentContainer">
      <div
        style={{ display: 'flex', flex: '1 1 48%', flexDirection: 'column' }}
      >
        <ContentHeader
          originCity="Pune(PNQ)"
          destinationCity="Delhi(DEL)"
          travelDate="11/2/2020"
          flightCount="4"
        />
        <FlightList />
      </div>
      {!isOneWay && (
        <div
          style={{ display: 'flex', flex: '1 1 48%', flexDirection: 'column' }}
        >
          <ContentHeader
            originCity="Pune(PNQ)"
            destinationCity="Delhi(DEL)"
            travelDate="11/2/2020"
            flightCount="4"
          />
          <FlightList />
        </div>
      )}
    </div>
  );
}

Content.propTypes = {
  isOneWay: PropTypes.bool,
};

Content.defaultProps = {
  isOneWay: true,
};

export default Content;
