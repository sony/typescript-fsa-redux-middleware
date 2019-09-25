import { middleware } from 'typescript-fsa-redux-middleware';

import {
  Selectors,
  Operations, Actions,
  IModuleOwnState,
} from '../module';

// ============================================================================
// CONFIG
//

// ============================================================================
// Middleware implementation
//
export default middleware<IModuleOwnState>()

// ============================================================================
// Status
// ----------------------------------------------------------------------------
// Counter
//
.case(Operations.counterIncrease, ({getState, dispatch}, next, action) => {
  const counter = Selectors.getCount(getState());
  dispatch( Actions.setCounter(counter + 1) );
  next(action);
})
.case(Operations.counterDecrease, ({getState, dispatch}, next, action) => {
  const counter = Selectors.getCount(getState());
  dispatch( Actions.setCounter(counter - 1) );
  next(action);
})
