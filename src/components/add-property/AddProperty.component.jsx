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

  const [selectedAddress, setSelectedAddress] = useState(address);

  // const availableCategories = useSelector(selectCategoryItems);
  const availableCategories = [
    {
      id: 1,
      name: 'Beach Houses',
    },
    {
      id: 2,
      name: 'Forest Houses',
    },
    {
      id: 3,
      name: 'Big Houses',
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState(categories);

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
    const { name, value } = e.target;

    setSelectedCategories([...selectedCategories, value]);

    console.log(selectedCategories);

    setFormFields({ ...formFields, [name]: selectedCategories });
  };

  const handleAddress = (e) => {
    const { name, value } = e.target;

    setSelectedAddress({ ...selectedAddress, [name]: value });
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
          <div className="form_selectorBox">
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

          <div className="form_selectorBox">
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

          <div className="form_selectorBox">
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

          <div className="form_selectorBox">
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
            <span>Kind</span>
          </div>

          <div className="form_selectorBox">
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
          {
            availableCategories.map((category) => (
              <div className="form__checkBox__block" key={category.id}>
                <label htmlFor={category.name}>{category.name}</label>
                <input
                  type="checkbox"
                  name="categories"
                  value={category.name}
                  onChange={handleCategoriesValue}
                />
              </div>
            ))
          }
        </div>

        <div className="form__addressBox">
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
        </div>
        <button type="submit" className="form__btn">Add your property!</button>
      </form>
    </section>
  );
};

export default AddPropertyComponent;
