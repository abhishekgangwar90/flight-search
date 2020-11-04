import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import FilterFields from './FilterFields';

function Filters({
  isOneWay,
  setOneWay,
  flightState,
  onFlightSearch,
  handleFieldUpdate,
}) {
  const renderFilterAction = () => {
    return (
      <>
        <span
          role="button"
          className={isOneWay ? 'selected' : ''}
          tabIndex={0}
          onKeyDown={() => setOneWay(true)}
          onClick={() => setOneWay(true)}
        >
          One Way
        </span>
        <span
          role="button"
          className={!isOneWay ? 'selected' : ''}
          tabIndex={0}
          onKeyDown={() => setOneWay(false)}
          onClick={() => setOneWay(false)}
        >
          Return
        </span>
      </>
    );
  };

  return (
    <div className="filterContainer">
      <div className="filterAction">{renderFilterAction()}</div>
      <FilterFields
        isOneWay={isOneWay}
        fieldData={flightState.data}
        onChange={handleFieldUpdate}
        handleSearch={onFlightSearch}
      />
    </div>
  );
}

Filters.propTypes = {
  isOneWay: PropTypes.bool,
  setOneWay: PropTypes.func,
  onFlightSearch: PropTypes.func,
  flightState: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.shape({
      origin: PropTypes.string,
      destination: PropTypes.string,
      travelDate: PropTypes.string,
      returnDate: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  handleFieldUpdate: () => {},
};

Filters.defaultProps = {
  isOneWay: true,
  flightState: {
    isLoading: false,
    data: {
      origin: '',
      destination: '',
      travelDate: '',
      returnDate: '',
    },
    error: null,
  },
  setOneWay: () => {},
  onFlightSearch: () => {},
  handleFieldUpdate: () => {},
};

export default Filters;
