import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import './Filters.scss';
import Button from '../../atoms/Button';
import Select from '../../atoms/Select';
import { passengerSelectOptions } from './FilterConfig';

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

  const renderFilterInputs = () => {
    return (
      <>
        <Input placeholder="Enter Origin City" />
        <Input placeholder="Enter Destination City" />
      </>
    );
  };

  const renderDateSelection = () => {
    return (
      <>
        <Input placeholder="Departure Date" />
        {!isOneWay && <Input placeholder="Return Date" />}
      </>
    );
  };

  const renderPassengerSelect = () => {
    return (
      <>
        <Select
          defaultValue={0}
          name="Passengers"
          options={passengerSelectOptions}
        />
      </>
    );
  };

  return (
    <div className="filterContainer">
      <div className="filterAction">{renderFilterAction()}</div>
      {renderFilterInputs()}
      {renderDateSelection()}
      {renderPassengerSelect()}
      <Button className="button">Search</Button>
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
