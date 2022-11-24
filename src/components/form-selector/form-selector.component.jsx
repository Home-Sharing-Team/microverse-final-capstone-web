import PropTypes from 'prop-types';

import './form-selector.styles.scss';

export function FormSelector({
  title,
  options,
  ...selectProps
}) {
  const optionsArray = [];

  options.forEach(({ name, value }) => {
    optionsArray.push(
      <option key={value} value={value}>
        {name}
      </option>,
    );
  });

  return (
    <div className="form-selector">
      <select
        className="form-selector__input"
        {...selectProps}
      >
        {optionsArray}
      </select>
      <span className="form-selector__title">
        {title}
      </span>
    </div>
  );
}

FormSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};
