import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import FilterFields from './FilterFields';
import { filterReducer, initialState } from './hooks/useFilterReducer';
import { UPDATE_FIELD } from './constants';

function Filters({ isOneWay, setOneWay, onFlightSearch }) {
  const [state, dispatch] = React.useReducer(filterReducer, initialState);

  const handleFlightSearch = (e) => {
    e.preventDefault();
    onFlightSearch(state.data);
  };

  const handleFieldUpdate = (id, value) => {
    dispatch({
      type: UPDATE_FIELD,
      payload: { id, updatedField: value },
    });
  };

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
        fieldData={state.data}
        onChange={handleFieldUpdate}
        handleSearch={handleFlightSearch}
      />
    </div>
  );
}

Filters.propTypes = {
  isOneWay: PropTypes.bool,
  setOneWay: PropTypes.func,
  onFlightSearch: PropTypes.func,
};

Filters.defaultProps = {
  isOneWay: true,
  setOneWay: () => {},
  onFlightSearch: () => {},
};

export default Filters;
