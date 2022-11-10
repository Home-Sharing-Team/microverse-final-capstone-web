import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './sign-up.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch();

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section>
      <h2>Thanks for visiting!</h2>
    </section>
  );
};

export default SignUpComponent;
