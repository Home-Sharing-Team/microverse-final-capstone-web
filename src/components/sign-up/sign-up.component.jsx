import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./sign-up.styles.scss";

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  return (
    <section>
      <h2>Thanks for visiting!</h2>
    </section>
  );
};

export default SignUpComponent;
