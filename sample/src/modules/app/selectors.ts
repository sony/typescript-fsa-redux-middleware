import {
  IState,
  IModuleOwnState,
} from './module';

// ============================================================================
// Export Class implementation
//
export class Selectors {

  // --------------------------------------------------------------------------
  // Root State
  private static getState( state: IModuleOwnState ) : IState {
    return state.app;  // should have this object
  }

  // --------------------------------------------------------------------------
  // Condition check method
  //

  // --------------------------------------------------------------------------
  // Value picker
  //
}
export default Selectors;
