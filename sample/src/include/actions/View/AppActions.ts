import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('ACTIONS/APP');

// ============================================================================
// Params
//
export interface IAddTodoItemParam {
  todo  : string;
}

export interface ITodoItemIdParam {
  id  : number;
}

// ============================================================================
// Action Creators
//
export const AppActionCreators = {
  initialize      : actionCreator<null>('INITIALIZE'),

  // Counter
  counterIncrease : actionCreator<null>('COUNTER_INCREASE'),
  counterDecrease : actionCreator<null>('COUNTER_DECREASE'),

  // Todo
  addTodoItem           : actionCreator<IAddTodoItemParam>  ('ADD_TODO_ITEM'),
  changeTodoItemStatus  : actionCreator<ITodoItemIdParam>   ('CHANGE_TODO_ITEM_STATUS'),
  deleteTodoItem        : actionCreator<ITodoItemIdParam>   ('DELETE_TODO_ITEM'),
};
