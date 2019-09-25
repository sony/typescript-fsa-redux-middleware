import { reducerWithInitialState } from "typescript-fsa-reducers";

// ============================================================================
// Type Definitions
//
export interface IState {
}

// ============================================================================
// Initial State
//
const initialState = () : IState => {
  return {
  };
};

// ============================================================================
// Reducer implementation
//
export default reducerWithInitialState<IState>( initialState() )
