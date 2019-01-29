import { ITodo } from '../model/TodoModel';

// ============================================================================
// State
//
export interface IState {
  counter: ICounterState;
  todo: ITodoState;
}

export interface ICounterState {
  count: number;
}

export interface ITodoState {
  last  : number;
  todos : Map<number, ITodo>;
}

// ============================================================================
// State Access method
// ----------------------------------------------------------------------------
// Root
//
export function getState( state: IState ) : IState {
  return state;  // No addition / No meaning
}

// ----------------------------------------------------------------------------
// Counter
//
export function getCounterState( state: IState ) : ICounterState {
  return state.counter;  // should have this object
}

// ----------------------------------------------------------------------------
// Todo
//
export function getTodoState( state: IState ) : ITodoState {
  return state.todo;  // should have this object
}
