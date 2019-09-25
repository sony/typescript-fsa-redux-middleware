import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import ToDo from './components/Todo';
import {TodoModules} from './modules/default';

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
    <DynamicModuleLoader modules={TodoModules}>
      <ToDo {...props} />
    </DynamicModuleLoader>
  )
}

export default Component;
