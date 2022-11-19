import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservationsFromApi } from '../../services/reservationsApi';
import { selectReservationIsLoading, selectReservationsItems } from '../../redux/reservation/reservations.selectors';
import ReservationBlock from '../reservationBlock/reservationBlock.component';
import Spinner from '../spinner/spinner.component';

import './reservations.styles.scss';

const ReservationsComponent = () => {
  const dispatch = useDispatch();

  const allReservations = useSelector(selectReservationsItems);
  const isLoading = useSelector(selectReservationIsLoading);

  useEffect(() => {
    dispatch(getReservationsFromApi());
  }, []);

  return (
    <main className="reservations">
      <h3 className="reservations__title">Take a look at your reservations</h3>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <section className="reservations__container">
            {(allReservations.length > 0) ? (
              allReservations.map((reservation) => (
                <ReservationBlock
                  checkIn={reservation.checkIn}
                  checkOut={reservation.checkOut}
                  price={reservation.price}
                  guests={reservation.guests}
                  propertyDetails={reservation.propertyDetails}
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
        )
      }
    </main>
  );
};

export default ReservationsComponent;
