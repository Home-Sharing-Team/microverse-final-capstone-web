import React from 'react';
import { useDispatch } from 'react-redux';
import { getReservationsFromApi } from '../../services/reservationsApi';

import './reservation.styles.scss';

const ReservationComponent = () => {
  const dispatch = useDispatch();

  dispatch((dispatch) => {
    dispatch(getReservationsFromApi());
  });

  return (
    <section className="reservation">
      <h3>Here you&apos;ll see the reservation</h3>
    </section>
  );
};

export default ReservationComponent;
