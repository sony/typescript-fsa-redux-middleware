import { reducerWithInitialState } from "typescript-fsa-reducers";

import { Actions } from './operations';
import { ITodo } from './definitions';

// ============================================================================
// Type Definitions
//
export interface IState {
  map : Map<number, ITodo> | undefined;
}

// ============================================================================
// Initial State
//
const initialState = () : IState => ({
  map : new Map<number, ITodo>(),
});

// ============================================================================
// Reducer implementation
//
export default reducerWithInitialState<IState>( initialState() )

// ----------------------------------------------------------------------------
// initStatus
//
.case( Actions.initialize, () => {
  return { ...initialState() };
})

// ----------------------------------------------------------------------------
// Update todos
//
.case( Actions.updateTodo, (state, {map}) => {
  return { ...state, map };
})
