import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import { MiddlewareBuilder } from '../../src';

import TestMiddleware_01, { ActionCreators_01, ActionParam_02 } from './middleware/TestMiddleware_01';

// ============================================================================
// Preparation
// ----------------------------------------------------------------------------
// create mock
//
function create(middleware: MiddlewareBuilder<any, Dispatch<AnyAction>>) {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action: AnyAction) => middleware(store)(next)(action);

  return {store, next, invoke};
}

// ============================================================================
// Test specs
// ----------------------------------------------------------------------------
// Just pass through action
//
it('Passes through action', () => {
  const {next, invoke} = create(TestMiddleware_01);
  const action = { type: "ACTION_01" }
  invoke(action);
  expect(next).toHaveBeenCalledWith({...action, meta: "called"});
})

// ----------------------------------------------------------------------------
// Check action creator type works
//
it('ActionCreator type', () => {
  const {next, invoke} = create(TestMiddleware_01);
  invoke(ActionCreators_01.action_01());
  expect(next).toHaveBeenCalledWith({type: "ACTION_01", meta: "called"});
})

// ----------------------------------------------------------------------------
// Action with parameter
//
it('Action with parameter', () => {
  const {next, invoke} = create(TestMiddleware_01);

  const param: ActionParam_02 = { value: "value" };
  invoke(ActionCreators_01.action_02(param));
  expect(next).toHaveBeenCalledWith({type: "ACTION_02", payload: param, meta: "called"});
})

// ----------------------------------------------------------------------------
// Call cases
//
it('Call cases', () => {
  const {next, invoke} = create(TestMiddleware_01);

  invoke( ActionCreators_01.action_cases_01() );
  expect(next).toHaveBeenCalledWith({type: "ACTION_CASES_01", meta: "called"});

  invoke( ActionCreators_01.action_cases_02() );
  expect(next).toHaveBeenCalledWith({type: "ACTION_CASES_02", meta: "called"});
})

// ----------------------------------------------------------------------------
// Add cases multiple times
//
it('Add cases multiple times', () => {
  const {next, invoke} = create(TestMiddleware_01);

  invoke( ActionCreators_01.action_03() );
  expect(next).toHaveBeenNthCalledWith(1, {type: "ACTION_03", meta: "1st"});
  expect(next).toHaveBeenNthCalledWith(2, {type: "ACTION_03", meta: "2nd"});
})

// ----------------------------------------------------------------------------
// No target type
//
it('No target type', () => {
  const {next, invoke} = create(TestMiddleware_01);
  const action = { type: "NO_TARGET_ACTION" };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
  expect(next).not.toHaveBeenCalledWith({...action, meta: "called"});
})
