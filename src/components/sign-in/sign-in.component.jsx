import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className="auth-ex">
      {currentUser ? (
        <div className="auth-ex__status">
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
        <div className="auth-ex__status">
          <p>
            {'Status: '}
            <strong>NOT</strong>
            {' logged-in.'}
          </p>
        </div>
      )}

      <form className="auth-ex__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter you email..."
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      {authError && <p>{`Error: ${authError}`}</p>}
    </div>
  );
};

export default LogInComponent;
