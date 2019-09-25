import React from 'react';

import Counter from '../widgets/Counter';
import Todo from '../widgets/Todo';

// ============================================================================
// CONFIG
//
const styles = {
  root: {
    margin: '8px 0 8px 0',
  },
  container: {
    display: 'flex' as 'flex',
  },
};


// ============================================================================
// Type definitions
// ----------------------------------------------------------------------------
// Component interface
//
export interface IProps {
}

// ============================================================================
// Component implementation
// ----------------------------------------------------------------------------
const Component: React.FC<IProps> = (props) => {

  // ==========================================================================
  // render
  //
  function render() {

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <div>Counter : </div>
          <Counter />
        </div>

        <div style={styles.container}>
          <div>TODO : </div>
          <Todo />
        </div>
      </div>
    );
  }

  // ==========================================================================
  // Master renderer
  //
  return render();
}
export default Component;
