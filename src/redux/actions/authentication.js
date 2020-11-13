import authActionTypes from '../action-types/authentication';
import Authentication from '../../utils/Authentication';
import errorTypes from '../action-types/errorTypes';
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
    dispatch({ type: errorTypes.ERROR_OCCURRED, payload: e });
    dispatch({ type: authActionTypes.SIGNUP_FAIL });
  }
};

export const userLogIn = (email, password) => async (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  try {
    await _auth.login(email, password);
  } catch (e) {
    dispatch({ type: errorTypes.ERROR_OCCURRED, payload: e });

    dispatch({ type: authActionTypes.LOGIN_FAIL });
  }
};

export const userLogOut = () => async (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  try {
    await _auth.logout();
    // To reset all localStates
    window.location.reload();
  } catch (e) {
    console.log(e);
    dispatch({ type: authActionTypes.LOGOUT_FAIL });
  }
};

export const googleSignIn = () => (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  _auth.signInWithGoogle().catch((e) => {
    dispatch({ type: errorTypes.ERROR_OCCURRED, payload: e });

    dispatch({ type: authActionTypes.SIGNUP_FAIL });
  });
};

export const facebookSignIn = () => (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  _auth.signInWithFacebook().catch((e) => {
    dispatch({ type: errorTypes.ERROR_OCCURRED, payload: e });
    dispatch({ type: authActionTypes.SIGNUP_FAIL });
  });
};

export const microsoftSignIn = () => (dispatch) => {
  dispatch({ type: authActionTypes.AUTH_LOADING });
  _auth.signInWithMicrosoft().catch((e) => {
    dispatch({ type: errorTypes.ERROR_OCCURRED, payload: e });
    dispatch({ type: authActionTypes.SIGNUP_FAIL });
  });
};
