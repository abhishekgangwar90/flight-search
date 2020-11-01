import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

function Select({ name, options }) {
  return (
    <select className="select-css">
      <option>{`Select ${name}`}</option>
      {options.map((elm) => {
        return <option key={elm.id}>{elm.value}</option>;
      })}
    </select>
  );
}

Select.defaultProps = {
  name: 'default',
  options: [],
};

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(Object),
};

export default Select;
