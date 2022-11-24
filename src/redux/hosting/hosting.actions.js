import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createHostingFromApi, deleteHostingById } from '../../services/api.service';
import { thunkErrorHandler } from '../../utils/redux.utils';
import { setStatusMessage } from '../status/status.actions';
import { HOSTING_ACTION_TYPES } from './hosting.types';

export const setPropertyHostings = createAction(
  HOSTING_ACTION_TYPES.SET_PROPERTY_HOSTINGS,
);

export const createPropertyHostingAsync = createAsyncThunk(
  HOSTING_ACTION_TYPES.CREATE_PROPERTY_HOSTING_ASYNC,
  thunkErrorHandler(async ({
    propertyId, rate, cycle, cleaningFee, minimumCycleAmount,
  }, { getState, dispatch }) => {
    const newHosting = await createHostingFromApi({
      rate,
      cycle,
      minimumCycleAmount,
      cleaningFee,
      propertyId,
    });
    const { propertyHostings } = getState().hosting;

    dispatch(setStatusMessage({
      type: 'success',
      message: 'Rental rate created successfully.',
    }));

    return [...propertyHostings, newHosting];
  }),
);

export const deletePropertyHostingAsync = createAsyncThunk(
  HOSTING_ACTION_TYPES.DELETE_PROPERTY_HOSTING_ASYNC,
  thunkErrorHandler(async (hostingId, { getState, dispatch }) => {
    await deleteHostingById(hostingId);

    dispatch(setStatusMessage({
      type: 'success',
      message: 'Rental rate deleted successfully.',
    }));

    return getState().hosting.propertyHostings.filter(
      (hosting) => hosting.id !== hostingId,
    );
  }),
);
