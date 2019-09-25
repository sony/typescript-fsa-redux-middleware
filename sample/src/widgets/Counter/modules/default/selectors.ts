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
    return state.widgets_Counter;  // should have this object
  }

  // --------------------------------------------------------------------------
  // Condition check method
  //
  static getCount( state: IModuleOwnState ) {
    return Selectors.getState(state).count;
  }

  // --------------------------------------------------------------------------
  // Value picker
  //
}
export default Selectors;
