/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

import './calendar.styles.scss';

const DEFAULT_NUM_MONTHS = 1;

export function Calendar({
  mode,
  selected = null,
  fromDate,
  toDate,
  blockedDays = null,
  handleClickCallback,
  footer = null,
}) {
  const [numberOfMonths, setNumberOfMonths] = useState(DEFAULT_NUM_MONTHS);
  const calendarElem = useRef();

  const getNumberOfMonths = () => {
    if (!calendarElem.current) return DEFAULT_NUM_MONTHS;

    const parentElemWidth = calendarElem.current.parentElement.clientWidth;

    return parentElemWidth >= 636 ? 2 : DEFAULT_NUM_MONTHS;
  };

  const handleResize = () => {
    setNumberOfMonths(getNumberOfMonths());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={calendarElem} className="calendar">
      <DayPicker
        mode={mode}
        selected={selected}
        onSelect={handleClickCallback}
        fromDate={fromDate}
        toDate={toDate}
        numberOfMonths={numberOfMonths}
        disabled={blockedDays}
      />
      {footer && footer}
    </div>
  );
}

Calendar.propTypes = {
  mode: PropTypes.string.isRequired,
  selected: PropTypes.oneOf([
    PropTypes.instanceOf(Date),
    PropTypes.shape({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
    }),
  ]),
  fromDate: PropTypes.instanceOf(Date).isRequired,
  toDate: PropTypes.instanceOf(Date).isRequired,
  blockedDays: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  })),
  handleClickCallback: PropTypes.func.isRequired,
  footer: PropTypes.node,
};
