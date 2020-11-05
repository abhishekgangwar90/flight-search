/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const data = [
  {
    id: 1,
    value: 'Pune (PNQ)',
  },
  {
    id: 2,
    value: 'Delhi (DEL)',
  },
  {
    id: 3,
    value: 'Mumbai (BOM)',
  },
  {
    id: 4,
    value: 'Bangalore',
  },
];

function Input({ type, onChange, value, ...rest }) {
  const [suggestions, setSuggestion] = React.useState([]);
  const [inputVal, setInputValue] = React.useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (e) => {
    // eslint-disable-next-line no-shadow
    const { value } = e.target;
    try {
      const substrRegex = new RegExp(value, 'i');
      const tempData = data.filter((elm) => substrRegex.test(elm.value));
      setSuggestion(tempData);
    } catch (err) {
      console.log(err);
    }
    setInputValue(value);
    onChange(value);
  };

  const handleSuggestionClick = (val) => {
    setInputValue(val);
    onChange(val);
    setSuggestion([]);
  };

  return type !== 'date' ? (
    <div className="typeAhead">
      <input {...rest} value={inputVal} onChange={handleOnChange} type={type} />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((elm) => {
            return (
              <li
                key={elm.id}
                onKeyDown={handleSuggestionClick}
                onClick={() => handleSuggestionClick(elm.value)}
              >
                {elm.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  ) : (
    <input {...rest} value={value} onChange={onChange} type={type} />
  );
}

Input.defaultProps = {
  type: '',
  value: '',
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
