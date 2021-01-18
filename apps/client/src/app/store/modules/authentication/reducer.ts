import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '@forte-dev/ui';

const initialState = {
  signUpPending: false,
  loginPending: false,
  authenticated: false,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...initialState,
        signUpPending: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpPending: false,
        ...action.payload,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpPending: false,
        ...action.error,
      };

    case LOGIN_REQUEST:
      return {
        ...initialState,
        loginPending: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginPending: false,
        authenticated: true,
        ...action.payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginPending: false,
        ...action.error,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
