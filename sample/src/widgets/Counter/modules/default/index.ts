// application imports
import { Modules } from './module';

// ============================================================================
// Interface for outside of widget
//
export {
  // re-ducks exposure
  Selectors       as counterSelectors,
  Operations      as counterOperations,

  // redux-dynamic-modules exposure
  Modules         as CounterModules,
  IModuleOwnState as ICounterState,
} from './module';

export default Modules;

// ============================================================================
// Type exports
//
