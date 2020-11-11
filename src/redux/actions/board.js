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
    console.log(e);
    dispatch({ type: boardActionTypes.GET_ALL_LISTS_FAIL });
  }
};
