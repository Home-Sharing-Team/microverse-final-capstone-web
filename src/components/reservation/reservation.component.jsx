import React from 'react';
import { useDispatch } from 'react-redux';

import './reservation.styles.scss';

const ReservationComponent = () => {
  const dispatch = useDispatch();

  return (
    <section className="reservation">
      <h3>Here you&apos;ll see the reservation</h3>
    </section>
  );
};

export default ReservationComponent;
