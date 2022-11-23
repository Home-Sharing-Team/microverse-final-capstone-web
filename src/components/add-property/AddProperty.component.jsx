/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../hooks/toast.hook';
import { selectCategoryItems } from '../../redux/category/category.selectors';
import { createPropertyAsync } from '../../redux/property/property.actions';
import { selectStatusMessage } from '../../redux/status/status.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './add-property.styles.scss';

const defaultFormFields = {
  name: '',
  description: '',
  guest_capacity: 1,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  kind: '',
  size: '',
  address: {
    street: '',
    city: '',
    country: '',
    zip_code: '',
    number: '',
    continent: '',
  },
  categories: {},
};

const AddPropertyComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    guest_capacity,
    bedrooms,
    beds,
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

  if (statusMessage) {
    const { type } = statusMessage;

    if (type === 'error') {
      addToast(statusMessage);
    } else {
      navigate(`/users/${currentUser.id}/properties`);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      ...formFields,
      categories: Object.entries(categories)
        .filter(([_, value]) => value)
        .map(([key, _]) => key),
    };

    dispatch(createPropertyAsync(propertyData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleCategoriesValue = (e) => {
    const { value } = e.target;

    const selectedCategory = categories[value] ? !categories[value] : true;

    setFormFields({
      ...formFields,
      categories: {
        ...categories,
        [value]: selectedCategory,
      },
    });
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
            <span>Kind</span>
            <select
              name="kind"
              placeholder=" "
              onChange={handleChange}
              required
              value={kind}
            >
              <option value="select">Select the type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>

          <div className="form__selectorBox">
            <span>Guest Capacity</span>
            <input
              type="number"
              name="guest_capacity"
              placeholder=" "
              value={guest_capacity}
              min={1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__selectorBox">
            <span>Bedrooms</span>
            <input
              type="number"
              name="bedrooms"
              placeholder=" "
              value={bedrooms}
              min={1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__selectorBox">
            <span>Beds</span>
            <input
              type="number"
              name="beds"
              placeholder=" "
              value={beds}
              min={1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__selectorBox">
            <span>Baths</span>
            <input
              type="number"
              name="baths"
              placeholder=" "
              min={1}
              value={baths}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__selectorBox">
            <span>Size</span>
            <input
              type="number"
              name="size"
              placeholder=" "
              value={size}
              min={1}
              step="any"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__checkBox">
          <h3>Under which categories would you match your property?</h3>
          <p>(You must select at least 1 category)</p>
          {
            availableCategories
              .filter(({ name }) => name !== 'latests')
              .map((category) => (
                <div className="form__checkBox__block" key={category.id}>
                  <label htmlFor={category.name}>{category.name}</label>
                  <input
                    type="checkbox"
                    name={category.name}
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
              type="number"
              name="number"
              placeholder=" "
              min={1}
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
