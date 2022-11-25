import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { useState } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { FormSelector } from '../form-selector/form-selector.component';
import { InputGroup } from '../input-group/input-group.component';
import './create-hosting-form.styles.scss';

export function CreateHostingForm({
  availableCycleOptions,
  handleSubmitCallback,
}) {
  const formSelectorOptions = availableCycleOptions.map((option) => ({
    name: option.charAt(0).toUpperCase() + option.slice(1),
    value: option,
  }));

  const defaultFormFields = {
    cycle: formSelectorOptions.length > 0 ? formSelectorOptions[0].value : '',
    cleaningFee: '',
    rate: '',
    minimumCycleAmount: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    cleaningFee, rate, cycle, minimumCycleAmount,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitCallback(formFields);
  };

  return (
    <form onSubmit={handleSubmit} className="create-hosting-form">
      <div className="create-hosting-form__content">
        <h2 className="create-hosting-form__title">
          Create new rate
        </h2>
        <div className="create-hosting-form__group">
          <FormSelector
            name="cycle"
            onChange={handleChange}
            value={cycle}
            title="Time unit"
            options={formSelectorOptions}
            required
          />
          <p className="create-hosting-form__text">
            The time period that the rental rate is related to.
          </p>
        </div>
        <div className="create-hosting-form__group">
          <InputGroup>
            <FormInput
              title="Rental rate"
              id="rate"
              type="number"
              name="rate"
              value={rate}
              placeholder="Enter the rental rate..."
              onChange={handleChange}
              min={1}
              step="0.01"
              required
            />

            <FormInput
              title="Cleaning fee"
              id="cleaningFee"
              type="number"
              name="cleaningFee"
              value={cleaningFee}
              placeholder="Enter the cleaning fee..."
              min={1}
              step="0.01"
              onChange={handleChange}
            />
          </InputGroup>
          <p className="create-hosting-form__text">
            The cleaning fee is optional.
          </p>
        </div>

        <div className="create-hosting-form__group">
          <FormInput
            title={`Minimum ${pluralize(cycle, 2)}`}
            id="minimumCycleAmount"
            type="number"
            name="minimumCycleAmount"
            value={minimumCycleAmount}
            placeholder={`Enter the minimum ${pluralize(cycle, 2)}...`}
            min={1}
            step="1"
            onChange={handleChange}
            required
          />
          <p className="create-hosting-form__text">
            {`The minimum number of ${pluralize(cycle, 2)} needed for the rental rate to take effect.`}
          </p>
        </div>

      </div>

      <div className="create-hosting-form__action">
        <button
          type="submit"
          className="create-hosting-form__btn"
        >
          Create
        </button>
      </div>
    </form>
  );
}

CreateHostingForm.propTypes = {
  availableCycleOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleSubmitCallback: PropTypes.func.isRequired,
};
