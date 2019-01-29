import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';

import { IState, ICounterState, getCounterState, ITodoState, getTodoState } from '../include/state';

import { AppActionExecutor } from '../actions/AppActions';

import Counter from './Counter/Counter';
import Todo from './Todo/Todo';

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
// Type definition
//
interface IStateProps {
  counter : ICounterState;
  todo    : ITodoState;
}

interface IDispatchProps {
  appActionExecutor : AppActionExecutor;
}

interface IOwnStates {}
interface IOwnProps {}

interface IStates extends IOwnStates {}
interface IProps extends IStateProps, IDispatchProps, IOwnProps, RouteComponentProps {}

// ============================================================================
// Class implementation
//
export class TopPage extends React.Component<IProps, IStates> {

  // ==========================================================================
  // Life cycle event handler
  //

  // ==========================================================================
  // UI event handler
  //
  onClickCounterIncrease() {
    this.props.appActionExecutor.counterIncrease();
  }
  onClickCounterDecrease() {
    this.props.appActionExecutor.counterDecrease();
  }
  onAddTodoItem(todo: string) {
    this.props.appActionExecutor.addTodoItem(todo);
  }
  onChangeTodoItemState(id: number) {
    this.props.appActionExecutor.changeTodoItemsStatus(id);
  }
  onDeleteTodoItem(id: number) {
    this.props.appActionExecutor.deleteTodoItem(id);
  }

  // ==========================================================================
  // render
  //
  render() {
    const { counter, todo } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <div>Counter : </div>
          <Counter
            count={counter.count}
            onClickDecrease={this.onClickCounterDecrease.bind(this)}
            onClickIncrease={this.onClickCounterIncrease.bind(this)}
          />
        </div>

        <div style={styles.container}>
          <div>TODO : </div>
          <Todo
            any={'test'}
            todos={todo.todos}
            onAddItem={this.onAddTodoItem.bind(this)}
            onChangeItemState={this.onChangeTodoItemState.bind(this)}
            onDeleteItem={this.onDeleteTodoItem.bind(this)}
          />
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
    counter : getCounterState(state),
    todo    : getTodoState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => {
  return {
    appActionExecutor : new AppActionExecutor(dispatch),
  };
};

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(TopPage);
