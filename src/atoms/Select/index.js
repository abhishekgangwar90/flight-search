import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

function Select({ name, required, options, onChange }) {
  return (
    <select className="select-css" onChange={onChange} required={required}>
      <option>{`Select ${name}`}</option>
      {options.map((elm) => {
        return <option key={elm.id}>{elm.value}</option>;
      })}
    </select>
  );
}

Select.defaultProps = {
  name: 'default',
  required: true,
  onChange: () => {},
  options: [],
};

Select.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(Object),
};

export default Select;
