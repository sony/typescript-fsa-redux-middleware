import React from 'react';
import { Route } from 'react-router';

import RootContainer from './RootContainer';

// ============================================================================
// Type definitions
// ----------------------------------------------------------------------------
// Component interface
//
export interface IProps {
  content : React.ReactNode;
}

// ============================================================================
// Component implementation
// ----------------------------------------------------------------------------
const Component: React.FC<IProps> = (props) => {
  const {content} = props;

  // ==========================================================================
  // Render
  //
  function render() {
    return <Route render={(aProps) => renderContent(aProps)} />;
  }

  function renderContent(aProps: any): React.ReactNode {
    return (
      <RootContainer children={content} {...aProps} />
    );
  }

  // ==========================================================================
  // Master renderer
  //
  return render();
}
export default Component;
