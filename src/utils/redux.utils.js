import { setStatusMessage } from '../redux/status/status.actions';

export const thunkErrorHandler = (fn) => async (data, thunkApi) => {
  try {
    const result = await fn(data, thunkApi);
    return result;
  } catch (error) {
    const { dispatch } = thunkApi;

    dispatch(setStatusMessage({
      type: 'error',
      message: error.message,
    }));

    throw error;
  }
};
