import { IModule } from 'redux-dynamic-modules';

// application imports
import { Actions, Operations } from './operations';
import { Selectors } from './selectors';
import Reducer, { IState } from './reducers';
import middlewares from './middlewares';

// ============================================================================
// Type definitions
//
export interface IModuleOwnState
{
  widgets_Counter: IState;
}

// ============================================================================
// Dynamic Module
//
function getModule(): IModule<IModuleOwnState> {
  return {
    id: "CounterWidget",
    reducerMap: {
      widgets_Counter: Reducer,
    } as any,
    // Actions to fire when this module is added/removed
    initialActions: [Actions.initialize()],
    // finalActions: []
    middlewares,
  };
}

// ============================================================================
// Exports
//
export {
  IState,
  Selectors,
  Operations, Actions,
};

export const Modules = [
  // My module
  getModule(),
];
