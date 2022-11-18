import { createAction } from '@reduxjs/toolkit';
import { STATUS_ACTION_TYPES } from './status.types';

export const setStatusMessage = createAction(
  STATUS_ACTION_TYPES.SET_STATUS_MESSAGE,
);

export const resetStatusMessage = createAction(
  STATUS_ACTION_TYPES.RESET_STATUS_MESSAGE,
);
