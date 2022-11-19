import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInAsync, signOut } from '../../redux/user/user.actions';
import { selectCurrentUser, selectUserError } from '../../redux/user/user.selectors';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogInComponent = () => {
  const currentUser = useSelector(selectCurrentUser);
  const authError = useSelector(selectUserError);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      signInAsync({
        email,
        password,
      }),
    );
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <section className="sign-ex">
      {currentUser ? (
        <div className="sign-ex__status">
          <p>
            {'Status: '}
            <strong>Logged-in!</strong>
          </p>
          <p>{`User: ${currentUser.name}`}</p>
          <button
            type="button"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="sign-ex__status">
          <p>
            {'Status: '}
            <strong>NOT</strong>
            {' logged-in.'}
          </p>
        </div>
      )}

      <div className="sign-ex__container">
        <div className="sign-ex__container__header">
          <h2>Welcome to Home Sharing</h2>
          <p>Reserve the weekend of your dreams!</p>
        </div>

        <form className="sign-ex__container__form" onSubmit={handleSubmit}>
          <div className="sign-ex__container__form__inputBox">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={handleChange}
              required
            />
            <span>Email</span>
            <i />
          </div>

          <div className="sign-ex__container__form__inputBox">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={handleChange}
              required
            />
            <span>Password</span>
            <i />
          </div>
          <button type="submit" className="sign-ex__container__form__btn">Log In</button>
        </form>
      </div>

      <p className="sign-ex__new">
        Need an account?
        <Link to="../sign-up" className="sign-ex__new__link">
          Sign up
        </Link>
      </p>

      {authError && <p>{`Error: ${authError}`}</p>}
    </section>
  );
};

export default LogInComponent;
