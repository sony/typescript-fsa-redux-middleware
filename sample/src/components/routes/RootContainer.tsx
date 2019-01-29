import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import { IState } from '../../include/state';

// ============================================================================
// CONFIG
//
const styles = {
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
};

// ============================================================================
// Type definition
//
interface IStateProps {
}
interface IDispatchProps {
}

interface IOwnProps {}
interface IOwnStates {
}

interface IStates extends IOwnStates {}
interface IProps extends IStateProps, IDispatchProps, IOwnProps, WithStyles<typeof styles>, RouteComponentProps {}


// ============================================================================
// Class implementation
//
export class RootContainer extends React.Component<IProps, IStates> {

  componentDidMount() {
    console.debug(`Container::componentDidMount()`);
    const {
      history,
      location,
    } = this.props;

    // Show top page
    if (location.pathname !== '/') {
      history.push({ pathname: '/' });
    }
  }

  private renderHeader() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="primary" classes={{ root: classes.appBar }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>typescriptized react-redux app simple template</Typography>
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    const { children, classes } = this.props;
    return (
      <div>
        {this.renderHeader()}
        <div className={classes.rootContainer}>
          {children}
        </div>
      </div>
    );
  }
}

// ============================================================================
// React-Redux mapping
//
const mapStateToProps = (state: IState): IStateProps => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => {
  return {
  };
};

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)
  (withStyles(styles)(RootContainer));
