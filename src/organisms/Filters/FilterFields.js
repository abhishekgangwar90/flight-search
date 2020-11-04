import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import { passengerSelectOptions } from './FilterConfig';
import './Filters.scss';

function FilterFields({ isOneWay, onChange, fieldData, handleSearch }) {
  return (
    <form className="form" onSubmit={handleSearch}>
      <Input
        name="origin"
        type="text"
        autoComplete="off"
        value={fieldData.origin}
        onChange={(e) => onChange('origin', e.target.value)}
        placeholder="Enter Origin City"
        required
      />
      <Input
        name="destination"
        autoComplete="off"
        value={fieldData.destination}
        onChange={(e) => onChange('destination', e.target.value)}
        placeholder="Enter Destination City"
        type="text"
        required
      />
      <Input
        type="date"
        name="departureDate"
        placeholder="Departure Date"
        onChange={(e) => onChange('departureDate', e.target.value)}
        required
      />
      {!isOneWay && (
        <Input
          type="date"
          name="returnDate"
          placeholder="Return Date"
          onChange={(e) => onChange('returnDate', e.target.value)}
          required
        />
      )}
      <Select
        defaultValue={0}
        name="Passengers"
        options={passengerSelectOptions}
        onChange={(e) => onChange('passengerCount', e.target.value)}
        required
      />
      <Button
        area-label="search"
        className="button"
        type="submit"
        onClick={handleSearch}
        disabled={
          fieldData.passengerCount === '0' ||
          fieldData.passengerCount === 'Select Passengers'
        }
      >
        Search
      </Button>
    </form>
  );
}

FilterFields.propTypes = {
  isOneWay: PropTypes.bool,
  onChange: PropTypes.func,
  handleSearch: PropTypes.func,
  fieldData: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    departureDate: PropTypes.string,
    returnDate: PropTypes.string,
    passengerCount: PropTypes.string,
  }),
};

FilterFields.defaultProps = {
  isOneWay: true,
  onChange: () => {},
  handleSearch: () => {},
  fieldData: {},
};

export default FilterFields;
