import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserReservationsAsync } from '../../redux/reservation/reservation.actions';
import { selectReservationIsLoading, selectUserReservations } from '../../redux/reservation/reservation.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import ReservationBlock from '../reservationBlock/reservationBlock.component';
import Spinner from '../spinner/spinner.component';

import './reservations.styles.scss';

const ReservationsComponent = () => {
  const dispatch = useDispatch();

  const userReservations = useSelector(selectUserReservations);
  const isLoading = useSelector(selectReservationIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUserReservationsAsync(currentUser.id));
    }
  }, [currentUser]);

  return (
    <section className="reservations">
      <h3 className="reservations__title">Here you&apos;ll see the reservations you&apos;ve made</h3>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <section className="reservations__container">
            {(userReservations.length > 0) ? (
              userReservations.map((reservation) => (
                <ReservationBlock
                  checkIn={reservation.check_in}
                  checkOut={reservation.check_out}
                  price={reservation.price}
                  guests={reservation.guests}
                  propertyDetails={reservation.property}
                  id={reservation.id}
                  reservationId={reservation.id}
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
    </section>
  );
};

export default ReservationsComponent;
