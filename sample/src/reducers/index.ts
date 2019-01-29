import { combineReducers } from 'redux';

import counter from './CounterReducer';
import todo from './TodoReducer';

export default combineReducers({
  counter,
  todo,
});
