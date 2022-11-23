/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { useRef, useState } from 'react';

import './custom-selector.styles.scss';

export function CustomSelector({
  options,
  defaultOption,
  handleChangeCallback,
}) {
  const selectElem = useRef();
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const optionsArray = [];

  options.forEach(({ name, value }) => {
    optionsArray.push(
      <option key={value} value={value}>
        {name}
      </option>,
    );
  });

  let longestOptionName = options[0].name;

  for (let i = 1; i < options.length; i += 1) {
    if (options[i].name.length > longestOptionName.length) {
      longestOptionName = options[i].name;
    }
  }

  const selectWidth = longestOptionName.length * 12 + 10;

  const handleChange = () => {
    const selected = selectElem.current.value;

    handleChangeCallback(selected);
    setSelectedOption(selected);
  };

  return (
    <select
      defaultValue={selectedOption}
      onChange={handleChange}
      ref={selectElem}
      className="custom-selector"
      style={{ width: `${selectWidth}px` }}
    >
      {optionsArray}
    </select>
  );
}

CustomSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  defaultOption: PropTypes.any.isRequired,
  handleChangeCallback: PropTypes.func.isRequired,
};
