import actionCreatorFactory from 'typescript-fsa';

// ============================================================================
// Action Creators
//
const actionCreator = actionCreatorFactory('CounterModule');

// ============================================================================
// Operations Definitions
//
export const Operations = {
  counterIncrease : actionCreator<void> ('COUNTER_INCREASE'),
  counterDecrease : actionCreator<void> ('COUNTER_DECREASE'),
};

// ============================================================================
// Actions Definitions
//
export const Actions = {

  // ==========================================================================
  // Private actions
  //
  initialize  : actionCreator<void>   ('initialize'),

  // ==========================================================================
  // Reflect to store (reducer)
  //
  setCounter  : actionCreator<number> ('setCounter'),
}

export default Operations;
