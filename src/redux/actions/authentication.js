import authActionTypes from '../action-types/authentication';
import Authentication from '../../utils/Authentication';

const _auth = new Authentication();

export const loadUser = () => (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
};

export const userLoaded = (user) => (dispatch) => {
  dispatch({ type: authActionTypes.USER_LOADED, payload: user });
};

export const userSignUp = (email, password) => async (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  try {
    await _auth.signup(email, password);
  } catch (e) {
    console.log(e);
    dispatch({ type: authActionTypes.SIGNUP_FAIL });
  }
};
