import errorTypes from '../action-types/errorTypes';

export const resolveError = () => (dispatch) => {
  dispatch({ type: errorTypes.ERROR_RESOLVED });
};
