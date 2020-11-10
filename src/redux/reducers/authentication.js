import authActionTypes from '../action-types/authentication';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case authActionTypes.USER_LOADED:
    case authActionTypes.SIGNUP_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case authActionTypes.SIGNUP_FAIL:
    case authActionTypes.LOGIN_FAIL:
    case authActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
