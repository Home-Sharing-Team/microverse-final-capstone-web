import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/toast.hook';
import { selectStatusMessage } from '../../redux/status/status.selectors';
import { signUpAsync } from '../../redux/user/user.actions';

import '../sign-in/sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const statusMessage = useSelector(selectStatusMessage);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;

  useEffect(() => {
    if (statusMessage) {
      const { type } = statusMessage;

      if (type === 'error') {
        addToast(statusMessage);
      } else {
        navigate('/sign-in');
      }
    }
  }, [statusMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      signUpAsync({
        name,
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
          <p>Host or rent a home by yourself!</p>
        </div>

        <form className="sign-ex__container__form" onSubmit={handleSubmit}>
          <div className="sign-ex__container__form__inputBox">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={name}
              onChange={handleChange}
              required
            />
            <span>Name</span>
            <i />
          </div>

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
          <button type="submit" className="sign-ex__container__form__btn">Create Account</button>
        </form>
      </div>

      <p className="sign-ex__new">
        Already have an account?
        <Link to="../sign-in" className="sign-ex__new__link">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUpComponent;
