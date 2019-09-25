import { IModule } from 'redux-dynamic-modules';

// dependencies

// application imports
import { Actions, Operations } from './operations';
import { Selectors } from './selectors';
import Reducer, { IState } from './reducers';

// ============================================================================
// Type definitions
//
export interface IModuleOwnState
{
  app: IState;
}

// ============================================================================
// Dynamic Module
//
function getModule(): IModule<IModuleOwnState> {
  return {
    id: "ApplicationModule",
    reducerMap: {
      app: Reducer,
    } as any,
    // Actions to fire when this module is added/removed
    initialActions: [Actions.initialize(null)],
    // finalActions: []
    // middlewares: [],
  };
}

// ============================================================================
// Exports
//
export {
  IState,
  Selectors,
  Operations,
};

export const Modules = [
  // My module
  getModule(),
];
