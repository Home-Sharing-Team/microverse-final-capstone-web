/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useToast } from '../../hooks/toast.hook';
import { selectCategoryItems } from '../../redux/category/category.selectors';
import { selectStatusMessage } from '../../redux/status/status.selectors';

import './add-property.styles.scss';

const defaultFormFields = {
  name: '',
  description: '',
  guest_capacity: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  kind: '',
  size: 0,
  address: {
    street: '',
    city: '',
    country: '',
    zip_code: '',
    number: '',
    continent: '',
  },
  categories: [],
};

const AddPropertyComponent = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    guest_capacity,
    bedrooms,
    baths,
    kind,
    size,
    address,
    categories,
  } = formFields;

  const {
    street,
    city,
    country,
    zip_code,
    number,
    continent,
  } = address;

  const availableCategories = useSelector(selectCategoryItems);

  const { addToast } = useToast();
  const statusMessage = useSelector(selectStatusMessage);

  useEffect(() => {
    if (statusMessage) {
      const { type } = statusMessage;

      if (type === 'error') {
        addToast(statusMessage);
      }
    }
  }, [statusMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formFields);

    dispatch();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleCategoriesValue = (e) => {
    const { id, value } = e.target;
    const name = value;

    setFormFields({ ...formFields, categories: [...categories, { id, name }] });
  };

  const handleAddress = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, address: { ...address, [name]: value } });
  };

  return (
    <section className="add-property">
      <div className="add-property__header">
        <h2>Add your property so that other people can rent it!</h2>
        <p>Please, fill all the inputs so that you can host a home!</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__text-containers">
          <div className="form__inputBox">
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

          <div className="form__inputBox">
            <input
              type="text"
              name="description"
              placeholder=" "
              value={description}
              onChange={handleChange}
              required
            />
            <span>Description</span>
            <i />
          </div>
        </div>

        <div className="form__selectors">
          <div className="form__selectorBox">
            <input
              type="number"
              name="guest_capacity"
              placeholder=" "
              value={guest_capacity}
              onChange={handleChange}
              required
            />
            <span>Guest Capacity</span>
          </div>

          <div className="form__selectorBox">
            <input
              type="number"
              name="bedrooms"
              placeholder=" "
              value={bedrooms}
              onChange={handleChange}
              required
            />
            <span>Bedrooms</span>
          </div>

          <div className="form__selectorBox">
            <input
              type="number"
              name="baths"
              placeholder=" "
              value={baths}
              onChange={handleChange}
              required
            />
            <span>Baths</span>
          </div>

          <div className="form__selectorBox">
            <span>Kind</span>
            <select
              name="kind"
              placeholder=" "
              onChange={handleChange}
              required
              value={kind}
            >
              <option value="select">Select the type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div className="form__selectorBox">
            <input
              type="number"
              name="size"
              placeholder=" "
              value={size}
              onChange={handleChange}
              required
            />
            <span>Size</span>
          </div>
        </div>

        <div className="form__checkBox">
          <h3>Under which categories would you match your property?</h3>
          <p>(You must select at least 1 category)</p>
          {
            availableCategories.map((category) => (
              <div className="form__checkBox__block" key={category.id}>
                <label htmlFor={category.name}>{category.name}</label>
                <input
                  type="checkbox"
                  name="categories"
                  value={category.name}
                  id={category.id}
                  onChange={handleCategoriesValue}
                />
              </div>
            ))
          }
        </div>

        <div className="form__addressBox">
          <h3>Enter the address of your property</h3>
          <div className="form__inputBox form__addressBox__element-full">
            <input
              type="text"
              name="street"
              placeholder=" "
              value={street}
              onChange={handleAddress}
              required
            />
            <span>Street</span>
            <i />
          </div>

          <div className="form__inputBox form__addressBox__element-half">
            <input
              type="text"
              name="city"
              placeholder=" "
              value={city}
              onChange={handleAddress}
              required
            />
            <span>City</span>
            <i />
          </div>

          <div className="form__inputBox form__addressBox__element-half">
            <input
              type="text"
              name="country"
              placeholder=" "
              value={country}
              onChange={handleAddress}
              required
            />
            <span>Country</span>
            <i />
          </div>

          <div className="form__inputBox form__addressBox__element-half">
            <input
              type="number"
              name="zip_code"
              placeholder=" "
              value={zip_code}
              onChange={handleAddress}
              required
            />
            <span>Zip Code</span>
            <i />
          </div>

          <div className="form__inputBox form__addressBox__element-half">
            <input
              type="number"
              name="number"
              placeholder=" "
              value={number}
              onChange={handleAddress}
              required
            />
            <span>House Number</span>
            <i />
          </div>

          <div className="form__inputBox form__addressBox__element-half">
            <input
              type="text"
              name="continent"
              placeholder=" "
              value={continent}
              onChange={handleAddress}
              required
            />
            <span>Continent</span>
            <i />
          </div>
        </div>
        <button type="submit" className="form__btn">Add your property!</button>
      </form>
    </section>
  );
};

export default AddPropertyComponent;
