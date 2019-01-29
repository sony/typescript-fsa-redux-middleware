import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('APP_LOGIC/TODO');

import { ITodoState } from '../../state';

// ============================================================================
// Params
//
export type IUpdateTodoParam = ITodoState;

// ============================================================================
// Action Creators
//
export const TodoAppLogicActionCreators = {
  initStatus    : actionCreator<null>             ('INIT_STATUS'),
  updateTodo    : actionCreator<IUpdateTodoParam> ('UPDATE_TODO'),
};
