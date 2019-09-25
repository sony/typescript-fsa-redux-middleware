// application imports
import { Modules } from './module';

// ============================================================================
// Interface for outside of widget
//
export {
  // re-ducks exposure
  Selectors       as todoSelectors,
  Operations      as todoOperations,

  // redux-dynamic-modules exposure
  Modules         as TodoModules,
  IModuleOwnState as ITodoState,
} from './module';

export default Modules;

// ============================================================================
// Type exports
//
import { StateEnum, ITodo } from './definitions';
export { StateEnum, ITodo };
