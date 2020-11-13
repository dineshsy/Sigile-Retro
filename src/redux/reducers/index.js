import { combineReducers } from 'redux';
import auth from './authentication';
import board from './board';
import error from './errorReducer';
export default combineReducers({
  auth,
  board,
  error,
});
