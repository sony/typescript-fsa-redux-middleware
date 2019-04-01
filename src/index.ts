import { Dispatch, MiddlewareAPI } from "redux";
import { Action, ActionCreator } from "typescript-fsa";

export interface MiddlewareBuilder<S> {
  case<P>(
    actionCreator: ActionCreator<P>,
    handler: Handler<S, P>,
  ): MiddlewareBuilder<S>;

  // cases variadic overloads
  cases<P1>(
    actionCreators: [ActionCreator<P1>],
    handler: Handler<S, P1>,
  ): MiddlewareBuilder<S>;
  cases<P1, P2>(
    actionCreators: [ActionCreator<P1>, ActionCreator<P2>],
    handler: Handler<S, P1 | P2>,
  ): MiddlewareBuilder<S>;
  cases<P1, P2, P3>(
    actionCreators: [
      ActionCreator<P1>,
      ActionCreator<P2>,
      ActionCreator<P3>
    ],
    handler: Handler<S, P1 | P2 | P3>,
  ): MiddlewareBuilder<S>;
  cases<P1, P2, P3, P4>(
    actionCreators: [
      ActionCreator<P1>,
      ActionCreator<P2>,
      ActionCreator<P3>,
      ActionCreator<P4>
    ],
    handler: Handler<S, P1 | P2 | P3 | P4>,
  ): MiddlewareBuilder<S>;
  cases<P>(
    actionCreators: Array<ActionCreator<P>>,
    handler: Handler<S, P>,
  ): MiddlewareBuilder<S>;

  <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
}

export type Handler<S, P> = (
  api: MiddlewareAPI<S>,
  next: Dispatch<S>,
  action: Action<P>,
) => void;

interface Case<S, P> {
  actionCreator: ActionCreator<P>;
  handler: Handler<S, P>;
}

type CaseMap<S> = Map<string, Array<Case<S, any>>>;

export function middleware<S>(): MiddlewareBuilder<S> {

  const cases: CaseMap<S> = new Map<string, Array<Case<S, any>>>();
  const middleware = getMiddlewareFunction<S>(cases) as MiddlewareBuilder<S>;

  middleware.case = <P>(
    actionCreator: ActionCreator<P>,
    handler: Handler<S, P>,
  ) => {
    const type = actionCreator.type;

    // add case into array
    const caseItems = cases.get(type);
    if (caseItems) {
      caseItems.push({ actionCreator, handler });
      return middleware;
    }

    // did not exists or no array found
    cases.set(type, [{ actionCreator, handler }]);
    return middleware;
  };

  middleware.cases = <P>(
    actionCreators: Array<ActionCreator<P>>,
    handler: Handler<S, P>,
  ) => {
    for (const actionCreator of actionCreators) {
      middleware.case(actionCreator, handler);
    }
    return middleware;
  };

  return middleware;
}

function getMiddlewareFunction<S, A extends Action<any> = Action<any>>(
  cases: CaseMap<S>,
) {
  return (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => (action: A) => {
    const caseItems = cases.get(action.type);
    if (caseItems) {
      for (const caseItem of caseItems) {
        caseItem.handler(api, next, action);
      }
      return;
    }
    return next(action);
  };
}
