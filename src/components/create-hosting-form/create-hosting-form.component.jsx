import pluralize from 'pluralize';
import { useState } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { FormSelector } from '../form-selector/form-selector.component';
import { InputGroup } from '../input-group/input-group.component';
import './create-hosting-form.styles.scss';

const defaultFormFields = {
  cycle: 'night',
  cleaningFee: '',
  rate: '',
  minimumCycleAmount: '',
};

export function CreateHostingForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    cleaningFee, rate, cycle, minimumCycleAmount,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form className="create-hosting-form">
      <div className="create-hosting-form__content">
        <h2 className="create-hosting-form__title">
          Create new pricing
        </h2>
        <div className="create-hosting-form__group">
          <FormSelector
            name="cycle"
            onChange={handleChange}
            required
            value={cycle}
            title="Time unit"
            options={[
              {
                name: 'Night',
                value: 'night',
              },
              {
                name: 'Week',
                value: 'week',
              },
              {
                name: 'Month',
                value: 'month',
              },
            ]}
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
            />

            <FormInput
              title="Cleaning fee"
              id="cleaningFee"
              type="number"
              name="cleaningFee"
              value={cleaningFee}
              placeholder="Enter the cleaning fee..."
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
            placeholder={`Enter the minimum number of ${pluralize(cycle, 2)}...`}
            onChange={handleChange}
          />
          <p className="create-hosting-form__text">
            {`The minimum number of ${pluralize(cycle, 2)} needed for the rental rate to take effect.`}
          </p>
        </div>

      </div>

      <div className="create-hosting-form__action">
        <button
          type="button"
          className="create-hosting-form__btn"
        >
          Create
        </button>
      </div>
    </form>
  );
}
