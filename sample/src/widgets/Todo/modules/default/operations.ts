import actionCreatorFactory from 'typescript-fsa';

import { ITodo } from './definitions';

// ============================================================================
// Params
//
export interface IAddTodoItemParam {
  todo  : string;
}

export interface ITodoItemIdParam {
  id    : number;
}

export interface IUpdateTodoParam {
  map   : Map<number, ITodo>;
}

// ============================================================================
// Action Creators
//
const actionCreator = actionCreatorFactory('TodoModule');

// ============================================================================
// Operations Definitions
//
export const Operations = {
  addTodoItem           : actionCreator<IAddTodoItemParam>  ('ADD_TODO_ITEM'),
  changeTodoItemStatus  : actionCreator<ITodoItemIdParam>   ('CHANGE_TODO_ITEM_STATUS'),
  deleteTodoItem        : actionCreator<ITodoItemIdParam>   ('DELETE_TODO_ITEM'),
};

// ============================================================================
// Actions Definitions
//
export const Actions = {

  // ==========================================================================
  // Private actions
  //
  initialize  : actionCreator<void> ('initialize'),

  // ==========================================================================
  // Reflect to store (reducer)
  //
  updateTodo  : actionCreator<IUpdateTodoParam> ('updateTodo'),
}

export default Operations;
