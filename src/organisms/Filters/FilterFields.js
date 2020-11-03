import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import { passengerSelectOptions } from './FilterConfig';
import './Filters.scss';

function FilterFields({ isOneWay, onChange }) {
  const renderFilterInputs = () => {
    return (
      <>
        <Input
          name="origin"
          type="text"
          autoComplete="off"
          onChange={onChange}
          placeholder="Enter Origin City"
          required
        />
        <Input
          name="destination"
          placeholder="Enter Destination City"
          type="text"
          required
        />
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
    <form className="form">
      {renderFilterInputs()}
      {renderDateSelection()}
      {renderPassengerSelect()}
      <Button className="button" disabled>
        Search
      </Button>
    </form>
  );
}

FilterFields.propTypes = {
  isOneWay: PropTypes.bool,
  onChange: PropTypes.func,
};

FilterFields.defaultProps = {
  isOneWay: true,
  onChange: () => {},
};

export default FilterFields;
