import * as React from 'react';

import CountUpIcon from '@material-ui/icons/ThumbUpAlt';
import CountDownIcon from '@material-ui/icons/ThumbDownAlt';

import IconButton from '@material-ui/core/IconButton';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

// ============================================================================
// CONFIG
//
const styles = {
  root: {
    display: 'flex' as 'flex',
  },
};

// ============================================================================
// Type definition
//
interface IOwnStates {}
interface IOwnProps {
  count           :  number;
  onClickIncrease : () => void;
  onClickDecrease : () => void;
}

interface IStates extends IOwnStates {}
interface IProps extends IOwnProps, WithStyles<typeof styles> {}

// ============================================================================
// Class implementation
//
export class Counter extends React.Component<IProps, IStates> {

  // ==========================================================================
  // UI event handler
  //

  // ==========================================================================
  // render
  //
  render() {
    const { count, onClickDecrease, onClickIncrease } = this.props;

    return (
      <div style={styles.root}>
        <IconButton onClick={onClickDecrease}>
          <CountDownIcon />
        </IconButton>
        <div>{count}</div>
        <IconButton onClick={onClickIncrease}>
          <CountUpIcon />
        </IconButton>
      </div>
    );
  }
}

// ============================================================================
// Class settings
//
export default withStyles(styles)(Counter);
