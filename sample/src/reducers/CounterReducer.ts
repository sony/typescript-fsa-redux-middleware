import { reducerWithInitialState } from "typescript-fsa-reducers";

import { CounterAppLogicActionCreators } from '../include/actions/AppLogic/CounterAppLogic';

import { ICounterState } from '../include/state';

// ============================================================================
// Initial State
//
const initialState : ICounterState = {
  count: 0,
};

// ============================================================================
// Reducer implementation
//
export default reducerWithInitialState<ICounterState>( initialState )

// ----------------------------------------------------------------------------
// initStatus
//
.case( CounterAppLogicActionCreators.initStatus, (state) => {
  return { ...initialState };
})

// ----------------------------------------------------------------------------
// setCount
//
.case( CounterAppLogicActionCreators.setCounter, (state, {count}) => {
  return { ...state,
    count,
  }
})
