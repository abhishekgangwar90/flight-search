import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, ...rest }) {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
