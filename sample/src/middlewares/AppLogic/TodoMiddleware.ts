import { middleware } from 'typescript-fsa-redux-middleware';

import { AppActionCreators } from '../../include/actions/View/AppActions';
import { TodoAppLogicActionCreators } from '../../include/actions/AppLogic/TodoAppLogic';

import { StateEnum, ITodo } from '../../include/model/TodoModel';
import { IState, ITodoState, getTodoState } from '../../include/state';

// ============================================================================
// CONFIG
//

// ============================================================================
// Middleware implementation
//
export default middleware<IState>()

  // ============================================================================
  // Status
  // ----------------------------------------------------------------------------
  // Add TodoItem
  //
  .case(AppActionCreators.addTodoItem, (api, next, action) => {
    const { todo } = action.payload;
    const todoState = getTodoState(api.getState());
    const nextTodoState: ITodoState = { ...todoState };
    const todoItem: ITodo = {
      id    : nextTodoState.last ++,
      state : StateEnum.toDo,
      todo,
    }
    nextTodoState.todos.set(todoItem.id, todoItem);

    api.dispatch( TodoAppLogicActionCreators.updateTodo(nextTodoState) );
    next(action);
  })

  // ----------------------------------------------------------------------------
  // Change TodoItem status
  //
  .case(AppActionCreators.changeTodoItemStatus, (api, next, action) => {
    const { id } = action.payload;
    const todoState = getTodoState(api.getState());
    const targetTodoItem = todoState.todos.get(id);

    // Modify status of target TodoItem
    if (targetTodoItem) {
      const nextTodoState: ITodoState = { ...todoState };

      switch (targetTodoItem.state) {
        case StateEnum.toDo: targetTodoItem.state = StateEnum.done; break;
        case StateEnum.done: targetTodoItem.state = StateEnum.toDo; break;
      }
      nextTodoState.todos.set(id, targetTodoItem);

      api.dispatch( TodoAppLogicActionCreators.updateTodo(nextTodoState) );
    }

    next(action);
  })

  // ----------------------------------------------------------------------------
  // Delete TodoItem
  //
  .case(AppActionCreators.deleteTodoItem, (api, next, action) => {
    const { id } = action.payload;
    const todoState = getTodoState(api.getState());
    const targetTodoItem = todoState.todos.get(id);

    // Remove target todoItem
    if (targetTodoItem) {
      const nextTodoState: ITodoState = { ...todoState };
      nextTodoState.todos.delete(id);
      api.dispatch( TodoAppLogicActionCreators.updateTodo(nextTodoState) );
    }

    next(action);
  })
