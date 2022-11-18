/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { useDispatch, useSelector } from 'react-redux';
import {
  addYears, subDays, parseISO, differenceInDays, addDays, closestTo, isAfter,
} from 'date-fns';
import {
  selectSelectedCheckIn,
  selectSelectedCheckOut,
  selectNumNights,
} from '../../redux/reservation/reservation.selectors';
import { Calendar } from '../calendar/calendar.components';

import './date-picker.styles.scss';
import {
  setNumNights,
  setSelectedCheckIn,
  setSelectedCheckOut,
  setSelectedHosting,
} from '../../redux/reservation/reservation.actions';
import { selectSelectedProperty } from '../../redux/property/property.selectors';
import { getCycleAmountInNights } from '../../utils/cycle.utils';
import Icon from '../icon/icon.component';

const getClosestAvailableDay = (selectedDay, blockedPeriods) => {
  const blockedPeriodsStartDates = blockedPeriods
    .filter(
      ({ from }) => isAfter(from, selectedDay),
    )
    .map(
      ({ from }) => from,
    );

  const closestBlockedPeriodStartDate = closestTo(selectedDay, blockedPeriodsStartDates);

  if (!closestBlockedPeriodStartDate) {
    return addYears(new Date(), 2);
  }

  return subDays(closestBlockedPeriodStartDate, 1);
};

export function DatePicker({ blockedPeriods }) {
  const dispatch = useDispatch();
  const property = useSelector(selectSelectedProperty);
  const checkInDate = useSelector(selectSelectedCheckIn);
  const checkOutDate = useSelector(selectSelectedCheckOut);
  const numNights = useSelector(selectNumNights);
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarFooter, setCalendarFooter] = useState(null);

  const clearDates = () => {
    dispatch(setSelectedCheckIn(null));
    dispatch(setSelectedCheckOut(null));
    dispatch(setNumNights(0));
    dispatch(setSelectedHosting(null));
    setSelectedDate(null);
    setCalendarFooter(null);
  };

  const setCheckOutDate = (range) => {
    if (!checkInDate) return;
    if (!range) {
      clearDates();
    } else if (!range.to) {
      dispatch(setSelectedCheckOut(range.from));
      setSelectedDate({ from: checkInDate, to: range.from });
      setCalendarFooter(null);
    } else {
      const selectedNumNights = differenceInDays(range.to, checkInDate);
      const minStayInNights = getCycleAmountInNights(
        property.min_cycle_hosting.minimum_cycle_amount,
        property.min_cycle_hosting.cycle,
      );

      if (selectedNumNights < minStayInNights) {
        const footer = (
          <footer className="calendar__footer">
            <Icon size="xsm" name="alert-circle" />
            <p>{`Minimum stay is ${pluralize('night', minStayInNights, true)}`}</p>
          </footer>
        );

        setCalendarFooter(footer);
      } else {
        dispatch(setSelectedCheckOut(range.to));
        dispatch(setNumNights(selectedNumNights));
        dispatch(
          setSelectedHosting({
            minCycleHosting: property.min_cycle_hosting,
            hostings: property.hostings,
            numNights: selectedNumNights,
          }),
        );
        setSelectedDate(range);
        setCalendarFooter(null);
      }
    }
  };

  const setCheckInDate = (day) => {
    dispatch(setSelectedCheckIn(day));
    setSelectedDate({ from: day });
  };

  const parseBlockedPeriods = (blockedPeriods) =>
    blockedPeriods.map(({ start_date, end_date }) => ({
      from: parseISO(start_date),
      to: parseISO(end_date),
    }));

  const blockedDays = parseBlockedPeriods(blockedPeriods);

  let title;
  let calendar;
  let text = `Minimum stay: ${pluralize(property.min_cycle_hosting.cycle, property.min_cycle_hosting.minimum_cycle_amount, true)}`;
  const formatDateOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  if (checkInDate) {
    title = 'Select check-out date';
    calendar = (
      <Calendar
        mode="range"
        selected={selectedDate}
        fromDate={checkInDate}
        toDate={getClosestAvailableDay(checkInDate, blockedDays)}
        handleClickCallback={setCheckOutDate}
        footer={calendarFooter}
      />
    );
  } else {
    title = 'Select check-in date';
    calendar = (
      <Calendar
        mode="single"
        selected={selectedDate}
        fromDate={addDays(new Date(), 1)}
        toDate={addYears(new Date(), 2)}
        handleClickCallback={setCheckInDate}
        blockedDays={blockedDays}
        footer={calendarFooter}
      />
    );
  }

  if (numNights > 0) {
    title = `${pluralize('night', numNights, true)} in ${property.address.city}`;
    text = `${checkInDate.toLocaleDateString(
      'en-US',
      formatDateOptions,
    )} - ${checkOutDate.toLocaleDateString('en-US', formatDateOptions)}`;
  }

  return (
    <div id="date-picker" className="date-picker">
      <header className="date-picker__header">
        <h2 className="date-picker__title">{title}</h2>
        <p className="date-picker__text">{text}</p>
      </header>
      <div className="date-picker__content">
        {calendar}
        <button onClick={clearDates} type="button" className="date-picker__btn">
          Clear dates
        </button>
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  blockedPeriods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      start_date: PropTypes.instanceOf(Date),
      end_date: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};
