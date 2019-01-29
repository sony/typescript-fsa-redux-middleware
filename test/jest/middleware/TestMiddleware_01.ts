import { middleware } from "../../../src/"; // typescript-fsa-redux-middleware
import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

// ============================================================================
// CONFIG
//
interface State {
}

export interface ActionParam_02 {
  value: string;
}

export const ActionCreators_01 = {
  action_01 : actionCreator<void>           ("ACTION_01"),
  action_02 : actionCreator<ActionParam_02> ("ACTION_02"),

  action_cases_01 : actionCreator<void> ("ACTION_CASES_01"),
  action_cases_02 : actionCreator<void> ("ACTION_CASES_02"),

  action_03 : actionCreator<void>           ("ACTION_03"),
};


// ============================================================================
// Middleware implementation
//
export default middleware<State>()

// ============================================================================
// Status
// ----------------------------------------------------------------------------
// passes through action
//
.case(ActionCreators_01.action_01, ({}, next, action) => {
  next({...action, meta: "called"});
})
.case(ActionCreators_01.action_02, ({}, next, action) => {
  next({...action, meta: "called"});
})

// --------------------------------------------------------------------------
// cases
//
.cases([ActionCreators_01.action_cases_01, ActionCreators_01.action_cases_02], ({}, next, action) => {
  next({...action, meta: "called"});
})

// --------------------------------------------------------------------------
// add cases multiple time
//
.case(ActionCreators_01.action_03, ({}, next, action) => {
  next({...action, meta: "1st"});
})
.case(ActionCreators_01.action_03, ({}, next, action) => {
  next({...action, meta: "2nd"});
})
