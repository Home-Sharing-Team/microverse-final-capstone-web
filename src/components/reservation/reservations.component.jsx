import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservationsFromApi } from '../../services/reservationsApi';
import ReservationBlock from '../reservationBlock/reservationBlock.component';

import './reservations.styles.scss';

const ReservationsComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(getReservationsFromApi());
    });
  }, []);

  const allReservations = useSelector((state) => state.reservations);

  return (
    <section className="reservation">
      <h3>Here you&apos;ll see the reservation</h3>
      <section className="game-list-container">
        {(allReservations.length > 0) ? (
          allReservations.map((reservation) => (
            <ReservationBlock
              checkIn={reservation.checkIn}
              checkOut={reservation.checkOut}
              price={reservation.price}
              guests={reservation.guests}
              id={reservation.id}
              reservationId={reservation.reservationId}
              userId={reservation.userId}
              key={reservation.id}
            />
          ))
        ) : (
          <h4>You have no reservations!</h4>
        )}
      </section>
    </section>
  );
};

export default ReservationsComponent;
