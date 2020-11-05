/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
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

function Input({ type, onChange, ...rest }) {
  const [suggestions, setSuggestion] = React.useState([]);
  const [inputVal, setInputValue] = React.useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    try {
      const substrRegex = new RegExp(value, 'i');
      const tempData = data.filter((elm) => substrRegex.test(elm.value));
      setSuggestion(tempData);
    } catch (err) {
      console.log(err);
    }
    setInputValue(value);
    onChange(e);
  };

  const handleSuggestionClick = (val) => {
    setInputValue(val);
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
    <input {...rest} onChange={onChange} type={type} />
  );
}

Input.defaultProps = {
  type: '',
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
