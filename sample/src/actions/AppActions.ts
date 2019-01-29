import { DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';

import {
  IAddTodoItemParam,
  ITodoItemIdParam,
  AppActionCreators,
} from '../include/actions/View/AppActions';

// ============================================================================
// Action Executor
//
export class AppActionExecutor implements DispatchProp<AnyAction> {
  constructor(public dispatch: Dispatch<AnyAction>) { }

  initialize() {
    this.dispatch( AppActionCreators.initialize() );
  }
  counterIncrease() {
    this.dispatch( AppActionCreators.counterIncrease() );
  }
  counterDecrease() {
    this.dispatch( AppActionCreators.counterDecrease() );
  }
  addTodoItem(todo: string) {
    const param: IAddTodoItemParam = { todo };
    this.dispatch( AppActionCreators.addTodoItem(param) );
  }
  changeTodoItemsStatus(id: number) {
    const param: ITodoItemIdParam = { id };
    this.dispatch( AppActionCreators.changeTodoItemStatus(param) );
  }
  deleteTodoItem(id: number) {
    const param: ITodoItemIdParam = { id };
    this.dispatch( AppActionCreators.deleteTodoItem(param) );
  }
}

export default AppActionExecutor;
