import { combineReducers } from 'redux';
import auth from './authentication';
import board from './board';

export default combineReducers({
  auth,
  board,
});
