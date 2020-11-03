import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import FilterFields from './FilterFields';

function Filters({ isOneWay, setOneWay }) {
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
      <FilterFields isOneWay={isOneWay} />
    </div>
  );
}

Filters.propTypes = {
  isOneWay: PropTypes.bool,
  setOneWay: PropTypes.func,
};

Filters.defaultProps = {
  isOneWay: true,
  setOneWay: () => {},
};

export default Filters;
