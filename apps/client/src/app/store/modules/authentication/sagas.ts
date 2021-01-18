import { put, call, takeLatest } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  signUpSuccess,
  signUpError,
  LOGIN_REQUEST,
  loginSuccess,
  loginError,
} from '@forte-dev/ui';

export function* signUpSaga(AuthService, action) {
  try {
    const response = yield call(AuthService.signUp, action.payload);

    yield put(signUpSuccess(response));
  } catch (err) {
    yield put(signUpError(err));
  }
}

export function* loginSaga(AuthService, action) {
  try {
    const response = yield call(AuthService.login, action.payload);

    yield put(loginSuccess(response));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* ({ AuthService }) {
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga, AuthService);
  yield takeLatest(LOGIN_REQUEST, loginSaga, AuthService);
}
