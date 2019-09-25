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
    return state.widgets_Todo;  // should have this object
  }

  // --------------------------------------------------------------------------
  // Condition check method
  //
  static getTodos( state: IModuleOwnState ) {
    return Selectors.getState(state);
  }

  // --------------------------------------------------------------------------
  // Value picker
  //
}
export default Selectors;
