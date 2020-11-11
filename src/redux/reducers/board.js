import boardActionTypes from '../action-types/board';

const INITIAL_STATE = {
  lists: null,
  isLoading: false,
  isUpdateCardSuccess: false,
  isDeleteCardSuccess: false,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case boardActionTypes.BOARD_LOADING:
      return {
        ...state,
        isLoading: true,
        isUpdateCardSuccess: false,
        isDeleteCardSuccess: false,
      };
    case boardActionTypes.GET_ALL_LISTS_SUCCESS:
      let lists = null;
      if (typeof action.payload === 'object') lists = action.payload;
      return {
        ...state,
        isLoading: false,
        lists: lists,
      };
    case boardActionTypes.UPDATE_CARD_SUCCESS:
      return {
        ...state,
        isloading: false,
        isUpdateCardSuccess: true,
      };
    case boardActionTypes.DELETE_CARD_SUCCESS:
      return {
        ...state,
        isloading: false,
        isDeleteCardSuccess: true,
      };
    default:
      return state;
  }
};

export default boardReducer;
