import { reducerWithInitialState } from "typescript-fsa-reducers";

import { TodoAppLogicActionCreators } from '../include/actions/AppLogic/TodoAppLogic';

import { ITodo } from '../include/model/TodoModel';
import { ITodoState } from '../include/state';

// ============================================================================
// Initial State
//
const initialState : ITodoState = {
  last  : 0,
  todos : new Map<number, ITodo>(),
};

// ============================================================================
// Reducer implementation
//
export default reducerWithInitialState<ITodoState>( initialState )

// ----------------------------------------------------------------------------
// initStatus
//
.case( TodoAppLogicActionCreators.initStatus, (state) => {
  return { ...initialState };
})

// ----------------------------------------------------------------------------
// Update todos
//
.case( TodoAppLogicActionCreators.updateTodo, (state, todoState) => {
  return todoState;
})
