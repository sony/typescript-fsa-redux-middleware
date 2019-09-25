import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

// material-ui icons
import CountUpIcon from '@material-ui/icons/ThumbUpAlt';
import CountDownIcon from '@material-ui/icons/ThumbDownAlt';

// Application imports
import {
  counterSelectors, counterOperations,
} from '../modules/default';

// ============================================================================
// CONFIG
//
const useStyles = makeStyles({
  root: {
    display: 'flex' as 'flex',
    width: 'auto' as 'auto',
  },
});

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
  const classes = useStyles({});
  const dispatch = useDispatch();

  // ==========================================================================
  // react-redux
  //
  const count = useSelector( counterSelectors.getCount );

  const onIncrease  = () => { dispatch( counterOperations.counterIncrease() ) }
  const onDecrease  = () => { dispatch( counterOperations.counterDecrease() ) }

  // ==========================================================================
  // render
  //
  function render() {
    return (
      <Container className={classes.root}>
        <IconButton onClick={onDecrease}>
          <CountDownIcon />
        </IconButton>
        <Container>{count}</Container>
        <IconButton onClick={onIncrease}>
          <CountUpIcon />
        </IconButton>
      </Container>
    );
  }

  // ==========================================================================
  // Master renderer
  //
  return render();
}
export default Component;
