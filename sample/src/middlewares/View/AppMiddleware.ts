import { middleware } from 'typescript-fsa-redux-middleware';
import { IState } from '../../include/state';

import { AppActionCreators } from '../../include/actions/View/AppActions';

import { CounterAppLogicActionCreators } from '../../include/actions/AppLogic/CounterAppLogic';
import { TodoAppLogicActionCreators } from '../../include/actions/AppLogic/TodoAppLogic';

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
  // initialize
  //
  .case(AppActionCreators.initialize, (api, next, action) => {
    api.dispatch( TodoAppLogicActionCreators.initStatus(null) );
    api.dispatch( CounterAppLogicActionCreators.initStatus(null) );
    next(action);
  })
