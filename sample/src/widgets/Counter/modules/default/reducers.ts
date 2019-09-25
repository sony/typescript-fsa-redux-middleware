import { reducerWithInitialState } from "typescript-fsa-reducers";

import { Actions } from './operations';

// ============================================================================
// Type Definitions
//
export interface IState {
  count: number;
}

// ============================================================================
// Initial State
//
const initialState = () : IState => ({
  count: 0,
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
.case( Actions.setCounter, (state, count) => {
  return { ...state, count };
})
