/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { resetStatusMessage, setStatusMessage } from './status.actions';

const INITIAL_STATE = {
  statusMessage: null,
};

const statusSlice = createSlice({
  name: 'status',
  initialState: INITIAL_STATE,
  extraReducers: {
    [setStatusMessage]: (state, { payload }) => {
      state.statusMessage = payload;
    },
    [resetStatusMessage]: (state) => {
      state.statusMessage = null;
    },
  },
});

export default statusSlice.reducer;
