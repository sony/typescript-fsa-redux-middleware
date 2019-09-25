// application imports
import { Modules } from './module';

// ============================================================================
// Interface for outside of widget
//
export {
  // re-ducks exposure
  Selectors       as appSelectors,
  Operations      as appOperations,

  // redux-dynamic-modules exposure
  Modules         as AppModules,
  IModuleOwnState as IState,
} from './module';

export default Modules;

// ============================================================================
// Type exports
//
