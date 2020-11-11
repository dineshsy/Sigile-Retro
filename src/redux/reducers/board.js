import boardActionTypes from '../action-types/board';

const INITIAL_STATE = {
  lists: null,
  isLoading: false,
  isUpdateCardSuccess: false,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case boardActionTypes.BOARD_LOADING:
      return {
        ...state,
        isLoading: true,
        isUpdateCardSuccess: false,
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
    default:
      return state;
  }
};

export default boardReducer;
