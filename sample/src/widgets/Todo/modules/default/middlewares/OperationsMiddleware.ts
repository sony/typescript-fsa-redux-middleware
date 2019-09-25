import { middleware } from 'typescript-fsa-redux-middleware';

import { StateEnum, ITodo } from '../definitions';
import {
  Selectors,
  Operations, Actions,
  IModuleOwnState,
} from '../module';

// ============================================================================
// CONFIG
//

// ============================================================================
// Middleware implementation
//
export default middleware<IModuleOwnState>()

// ============================================================================
// Status
// ----------------------------------------------------------------------------
// Add TodoItem
//
.case(Operations.addTodoItem, ({getState, dispatch}, next, action) => {
  const { todo } = action.payload;

  const {map} = Selectors.getTodos(getState());
  const todoItem: ITodo = {
    id    : newId(map),
    state : StateEnum.toDo,
    todo,
  }
  map.set(todoItem.id, todoItem);

  dispatch( Actions.updateTodo({map}) );
  next(action);
})

// ----------------------------------------------------------------------------
// Change TodoItem status
//
.case(Operations.changeTodoItemStatus, ({getState, dispatch}, next, action) => {
  const { id } = action.payload;

  const {map} = Selectors.getTodos(getState());
  const targetTodo = map.get(id);

  // Modify status of target TodoItem
  if (targetTodo) {
    switch (targetTodo.state) {
      case StateEnum.toDo: targetTodo.state = StateEnum.done; break;
      case StateEnum.done: targetTodo.state = StateEnum.toDo; break;
    }
    map.set(id, targetTodo);

    dispatch( Actions.updateTodo({map}) );
  }

  next(action);
})

// ----------------------------------------------------------------------------
// Delete TodoItem
//
.case(Operations.deleteTodoItem, ({getState, dispatch}, next, action) => {
  const { id } = action.payload;

  const {map} = Selectors.getTodos(getState());
  const targetTodo = map.get(id);

  // Remove target todoItem
  if (targetTodo) {
    map.delete(id);
    dispatch( Actions.updateTodo({map}) );
  }

  next(action);
})


// ============================================================================
// Internal use functions
//
function newId( map: Map<number, any> ){
  const array = Array.from( map.keys() );
  if (array.length <= 0) { return 1 }
  return Math.max( ...array ) + 1;
}
