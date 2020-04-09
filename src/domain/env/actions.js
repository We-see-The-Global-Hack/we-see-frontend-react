export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const signInRequest = () => ({ type: SIGN_IN_REQUEST });
export const signInSuccess = item => ({ type: SIGN_IN_SUCCESS, payload: item });
export const signInError = error => ({ type: SIGN_IN_FAILED, payload: error });
export const logoutAction = () => ({ type: LOGOUT_ACTION });
