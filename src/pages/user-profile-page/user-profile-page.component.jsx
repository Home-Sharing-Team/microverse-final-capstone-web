/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import { fetchSelectedUserAsync } from '../../redux/user/user.actions';
import { selectSelectedUser, selectUserIsLoading } from '../../redux/user/user.selectors';
import './user-profile-page.styles.scss';

export function UserProfilePage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const selectedUser = useSelector(selectSelectedUser);
  const isLoading = useSelector(selectUserIsLoading);

  useEffect(() => {
    dispatch(fetchSelectedUserAsync(userId));
  }, []);

  return (
    <section className="user-profile">
      {
        isLoading ? (
          <Spinner />
        ) : !selectedUser ? (
          <p>Error: user not found!</p>
        ) : (
          <div>{selectedUser.name}</div>
        )
      }
    </section>
  );
}
