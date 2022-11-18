import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getMe, signIn, signUp } from '../../services/api.service';
import { thunkErrorHandler } from '../../utils/redux.utils';
import { setStatusMessage } from '../status/status.actions';
import { USER_ACTION_TYPES } from './user.types';

const ACCESS_TOKEN_STORAGE_KEY = '@HomeSharing::accessToken';

export const signOut = createAction(USER_ACTION_TYPES.SIGN_OUT, () => {
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, '');

  return {};
});

export const checkUserSessionAsync = createAsyncThunk(
  USER_ACTION_TYPES.CHECK_USER_SESSION_ASYNC,
  async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    if (accessToken) {
      const user = await getMe(accessToken);
      return user;
    }

    return null;
  },
);

export const signInAsync = createAsyncThunk(
  USER_ACTION_TYPES.SIGN_IN_ASYNC,
  thunkErrorHandler(async ({ email, password }, { dispatch }) => {
    const { user, accessToken } = await signIn(email, password);

    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);

    dispatch(setStatusMessage({
      type: 'success',
      message: 'User successfully signed-in.',
    }));

    return user;
  }),
);

export const signUpAsync = createAsyncThunk(
  USER_ACTION_TYPES.SIGN_UP_ASYNC,
  thunkErrorHandler(async ({ name, email, password }, { dispatch }) => {
    await signUp(name, email, password);

    dispatch(setStatusMessage({
      type: 'success',
      message: 'User account successfully created.',
    }));
  }),
);
