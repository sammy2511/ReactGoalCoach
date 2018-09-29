import {combineReducers} from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import compgoals from './reducer_completedgoals';

export default combineReducers({
  user,
  goals,
  compgoals
})
