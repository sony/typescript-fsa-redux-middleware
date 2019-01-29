import { middleware } from 'typescript-fsa-redux-middleware';

import { AppActionCreators } from '../../include/actions/View/AppActions';
import { CounterAppLogicActionCreators } from '../../include/actions/AppLogic/CounterAppLogic';

import { IState, ICounterState, getCounterState } from '../../include/state';

// ============================================================================
// CONFIG
//

// ============================================================================
// Middleware implementation
//
export default middleware<IState>()

  // ============================================================================
  // Status
  // ----------------------------------------------------------------------------
  // Counter
  //
  .case(AppActionCreators.counterIncrease, (api, next, action) => {
    const counter = getCounterState(api.getState());
    const params: ICounterState = { ...counter, count: counter.count + 1 };
    api.dispatch( CounterAppLogicActionCreators.setCounter(params) );
    next(action);
  })
  .case(AppActionCreators.counterDecrease, (api, next, action) => {
    const counter = getCounterState(api.getState());
    const params: ICounterState = { ...counter, count: counter.count - 1 };
    api.dispatch( CounterAppLogicActionCreators.setCounter(params) );
    next(action);
  })
