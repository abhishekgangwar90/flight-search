/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ type, children, ...rest }) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
