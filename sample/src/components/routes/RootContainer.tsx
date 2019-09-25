import React, { useEffect } from 'react';
import * as H from 'history';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// ============================================================================
// CONFIG
//
const useStyles = makeStyles<Theme>((theme) => ({
  appBar: {
    flexGrow: 1,
    position: 'relative' as 'relative',
  },
  rootContainer: {
    width: '100%',
    minWidth: '800px',
    boxSizing: 'border-box' as 'border-box',
    margin: '0 auto',
    padding: '0 32px 40px 32px',
  },
  flex: {
    flexGrow: 1,
  },
}));

// ============================================================================
// Type definitions
// ----------------------------------------------------------------------------
// Component interface
//
export interface IProps {
  history: H.History;
  location: H.Location<any>;
}

// ============================================================================
// Component implementation
// ----------------------------------------------------------------------------
const Component: React.FC<IProps> = (props) => {
  const classes = useStyles({});
  const {history, location, children} = props;

  useEffect( () => {
    console.debug(`Container::useEffect::initialize`);
    // Show top page
    if (location.pathname !== '/') {
      history.push({ pathname: '/' });
    }
  }, [] );

  function _renderHeader() {
    return (
      <AppBar position="static" color="primary" classes={{ root: classes.appBar }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>typescriptized react-redux app simple template</Typography>
        </Toolbar>
      </AppBar>
    );
  }

  function render() {
    return (
      <div>
        {_renderHeader()}
        <div className={classes.rootContainer}>
          {children}
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
