import boardActionTypes from '../action-types/board';
import Board from '../../utils/Board';

const _board = new Board();

export const getAllLists = () => async (dispatch) => {
  dispatch({ type: boardActionTypes.BOARD_LOADING });
  try {
    const data = await _board.getLists();
    Promise.all(data).then((res) => {
      dispatch({
        type: boardActionTypes.GET_ALL_LISTS_SUCCESS,
        payload: res,
      });
    });
  } catch (e) {
    dispatch({ type: boardActionTypes.GET_ALL_LISTS_FAIL });
  }
};

export const addNewCard = (listID) => (dispatch) => {
  dispatch({ type: boardActionTypes.BOARD_LOADING });
  _board.addNewCard(listID).then((res) => {
    getAllLists()(dispatch);
  });
};

export const editCard = (listID, cardID, content) => (dispatch) => {
  dispatch({ type: boardActionTypes.BOARD_LOADING });
  _board.editCard(listID, cardID, content).then((res) => {
    getAllLists()(dispatch);
    dispatch({ type: boardActionTypes.UPDATE_CARD_SUCCESS });
  });
};

export const deleteCard = (listID, cardID) => (dispatch) => {
  dispatch({ type: boardActionTypes.BOARD_LOADING });
  _board.deleteCard(listID, cardID).then((res) => {
    getAllLists()(dispatch);
    dispatch({ type: boardActionTypes.DELETE_CARD_SUCCESS });
  });
};

export const toggleLike = (listID, cardID, likes) => (dispatch) => {
  dispatch({ type: boardActionTypes.BOARD_LOADING });
  _board.toggleLike(listID, cardID, likes).then((res) => {
    getAllLists()(dispatch);
  });
};
