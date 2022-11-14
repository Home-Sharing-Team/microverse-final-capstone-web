import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProperties, fetchPropertiesByCategory, fetchPropertyById } from '../../services/api.service';
import { PROPERTY_ACTION_TYPES } from './property.types';

export const fetchPropertyItemsAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_PROPERTIES_ASYNC,
  async () => {
    const propertyItems = await fetchProperties();
    return propertyItems;
  },
);

export const fetchPropertyItemsByCategoryAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_PROPERTIES_BY_CATEGORY_ASYNC,
  async (categoryId) => {
    const propertyItems = await fetchPropertiesByCategory(categoryId);
    return propertyItems;
  },
);

export const fetchSelectedPropertyAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_SELECTED_PROPERTY_ASYNC,
  async (propertyId) => {
    const selectedProperty = await fetchPropertyById(propertyId);
    return selectedProperty;
  },
);
