import actionCreatorFactory from 'typescript-fsa';

// ============================================================================
// Action Creators
//
const actionCreator = actionCreatorFactory('ApplicationModule');

// ============================================================================
// Operations Definitions
//
export const Operations = {
};

// ============================================================================
// Actions Definitions
//
export const Actions = {

  // ==========================================================================
  // Private actions
  //
  initialize      : actionCreator<null>('initialize'),

  // ==========================================================================
  // Reflect to store (reducer)
  //
}

export default Operations;
