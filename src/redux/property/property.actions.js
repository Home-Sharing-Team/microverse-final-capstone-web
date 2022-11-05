import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProperties } from '../../services/api.service';
import { PROPERTY_ACTION_TYPES } from './property.types';

export const fetchPropertyItems = createAsyncThunk(
  PROPERTY_ACTION_TYPES.FETCH_PROPERTIES_ASYNC,
  async () => {
    const propertyItems = await fetchProperties();
    return propertyItems;
  },
);
