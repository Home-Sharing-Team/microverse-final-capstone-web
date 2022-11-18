import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useToast } from '../../hooks/toast.hook';
import { selectStatusMessage } from '../../redux/status/status.selectors';
import { signInAsync } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogInComponent = () => {
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const statusMessage = useSelector(selectStatusMessage);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  if (statusMessage) {
    addToast(statusMessage);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      signInAsync({
        email,
        password,
      }),
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section className="sign-ex">

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
    </section>
  );
};

export default LogInComponent;
