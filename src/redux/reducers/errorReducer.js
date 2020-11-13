import errorTypes from '../action-types/errorTypes';

const INITIAL_STATE = {
  code: null,
  message: null,
  isError: false,
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case errorTypes.ERROR_OCCURRED:
      return {
        ...state,
        isError: true,
        ...action.payload,
      };
    case errorTypes.ERROR_RESOLVED:
      return {
        ...state,
        isError: false,
        code: null,
        message: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
