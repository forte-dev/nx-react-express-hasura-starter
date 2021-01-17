import { createAction, createErrorAction } from '../../helpers';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

export function signUpRequest(payload) {
  return createAction(SIGN_UP_REQUEST, payload);
}

export function signUpSuccess(payload) {
  return createAction(SIGN_UP_SUCCESS, payload);
}

export function signUpError(error) {
  return createErrorAction(SIGN_UP_ERROR, error);
}

export function loginRequest(payload) {
  return createAction(LOGIN_REQUEST, payload);
}

export function loginSuccess(payload) {
  return createAction(LOGIN_SUCCESS, payload);
}

export function loginError(error) {
  return createErrorAction(LOGIN_ERROR, error);
}

export function logoutRequest() {
  return createAction(LOGOUT);
}
