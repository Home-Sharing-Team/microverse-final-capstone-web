import { useState } from 'react';
import './create-hosting-form.styles.scss';

const defaultFormFields = {
  cleaningFee: null,
  rate: null,
};

export function CreateHostingForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { cleaningFee, rate } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form className="create-hosting-form">
      <div className="input-group">
        <label htmlFor="rate" className="form-input">
          <span
            className="form-input__text"
          >
            Rental rate
          </span>
          <input
            id="rate"
            className="form-input__input"
            type="number"
            name="rate"
            value={rate}
            placeholder="Enter the rental rate..."
            onChange={handleChange}
          />
        </label>
        <label htmlFor="cleaningFee" className="form-input">
          <span
            className="form-input__text"
          >
            Cleaning fee
          </span>
          <input
            id="cleaningFee"
            className="form-input__input"
            type="number"
            name="cleaningFee"
            value={cleaningFee}
            onChange={handleChange}
          />
        </label>
        <p className="input-group__text">
          Some text
        </p>
      </div>
    </form>
  );
}
