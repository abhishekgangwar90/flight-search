import React from 'react';
import PropTypes from 'prop-types';

import IconPlane from '../../atoms/IconPlane';
import './Content.scss';

function ContentHeader({
  originCity,
  destinationCity,
  flightCount,
  travelDate,
}) {
  return (
    <div className="contentHeader">
      <div className="headerIcon">
        <IconPlane />
      </div>
      <div className="headerDetails">
        <div className="title">
          {originCity} to {destinationCity}
        </div>
        <div className="subTitle">
          {flightCount} flights found, {travelDate}
        </div>
      </div>
    </div>
  );
}

ContentHeader.propTypes = {
  originCity: PropTypes.string,
  destinationCity: PropTypes.string,
  flightCount: PropTypes.string,
  travelDate: PropTypes.string,
};

ContentHeader.defaultProps = {
  originCity: '',
  destinationCity: '',
  flightCount: '',
  travelDate: '',
};

export default ContentHeader;
