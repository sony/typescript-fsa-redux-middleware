import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import Counter from './components/Counter';
import {CounterModules} from './modules/default';

// ============================================================================
// Type definitions
// ----------------------------------------------------------------------------
// Component interface
//
export interface IProps {
}

// ============================================================================
// DynamicModuleLoader
//
const Component: React.FC<IProps> = (props) => {
  return (
    <DynamicModuleLoader modules={CounterModules}>
      <Counter {...props} />
    </DynamicModuleLoader>
  )
}

export default Component;
