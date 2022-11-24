import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import './form-input.styles.scss';

export function FormInput({
  id, title, value, ...inputProps
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const filled = value.length > 0;
    setIsFilled(filled);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleFocusOut = () => {
    setIsFocused(false);
  };

  return (
    <label
      onFocus={handleFocus}
      onBlur={handleFocusOut}
      htmlFor={id}
      className={isFocused || isFilled ? 'form-input form-input--active' : 'form-input'}
    >
      <span
        className="form-input__text"
      >
        {title}
      </span>
      {
        isFocused || isFilled ? (
          <input
            id={id}
            value={value}
            className="form-input__input"
            {...inputProps}
          />
        ) : (
          <input id={id} className="form-input__input" />
        )
      }
    </label>
  );
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
