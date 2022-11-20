import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createDraftSafeSelector(
  selectUserReducer,
  (userSlice) => userSlice.currentUser,
);

export const selectUserIsLoading = createDraftSafeSelector(
  selectUserReducer,
  (userSlice) => userSlice.isLoading,
);

export const selectUserError = createDraftSafeSelector(
  selectUserReducer,
  (userSlice) => userSlice.error,
);

export const selectUserSuccessMsg = createDraftSafeSelector(
  selectUserReducer,
  (userSlice) => userSlice.successMsg,
);

export const selectUserSignUpSuccessMsg = createDraftSafeSelector(
  selectUserReducer,
  (userSlice) => userSlice.signUpSuccessMsg,
);
