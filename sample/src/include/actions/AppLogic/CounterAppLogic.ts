import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('APP_LOGIC/COUNTER');

import { ICounterState } from '../../state';

// ============================================================================
// Params
//

// ============================================================================
// Action Creators
//
export const CounterAppLogicActionCreators = {
  initStatus    : actionCreator<null>           ('INIT_STATUS'),
  setCounter    : actionCreator<ICounterState>  ('SET_COUNTER'),
};
