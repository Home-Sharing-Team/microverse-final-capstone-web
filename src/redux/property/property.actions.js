import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewPropertyApi,
  fetchProperties,
  fetchPropertiesByCategory,
  fetchPropertyById,
  fetchUserProperties,
  updatePropertyIsPublic,
} from '../../services/api.service';
import { thunkErrorHandler } from '../../utils/redux.utils';
import { setStatusMessage } from '../status/status.actions';
import { PROPERTY_ACTION_TYPES } from './property.types';

export const fetchPropertyItemsAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_PROPERTIES_ASYNC,
  async () => {
    const propertyItems = await fetchProperties();
    return propertyItems;
  },
);

export const fetchUserPropertiesAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_USER_PROPERTIES_ASYNC,
  async (userId) => {
    const userProperties = await fetchUserProperties(userId);
    return userProperties;
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

export const createPropertyAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.CREATE_PROPERTY_ASYNC,
  thunkErrorHandler(async (propertyData, { getState, dispatch }) => {
    const newProperty = await createNewPropertyApi(propertyData);
    const { userProperties } = getState().property;

    dispatch(setStatusMessage({
      type: 'success',
      message: 'Property created successfully.',
    }));

    return [...userProperties, newProperty];
  }),
);

export const updatePropertyIsPublicAsync = createAsyncThunk(
  PROPERTY_ACTION_TYPES.UPDATE_PROPERTY_IS_PUBLIC_ASYNC,
  thunkErrorHandler(async ({ isPublic, propertyId }, { dispatch }) => {
    const updatedProperty = await updatePropertyIsPublic(propertyId, isPublic);

    dispatch(setStatusMessage({
      type: 'success',
      message: `Property ${isPublic ? 'published' : 'unpublished'} successfully.`,
    }));

    return updatedProperty;
  }),
);
