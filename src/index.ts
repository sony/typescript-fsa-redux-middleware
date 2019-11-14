import { Dispatch, MiddlewareAPI } from "redux";
import { Action, ActionCreator } from "typescript-fsa";

export interface MiddlewareBuilder<S, D extends Dispatch = Dispatch> {
  case<P>(
    actionCreator: ActionCreator<P>,
    handler: Handler<S, P, D>,
  ): MiddlewareBuilder<S, D>;

  // cases variadic overloads
  cases<P1>(
    actionCreators: [ActionCreator<P1>],
    handler: Handler<S, P1>,
  ): MiddlewareBuilder<S, D>;
  cases<P1, P2>(
    actionCreators: [ActionCreator<P1>, ActionCreator<P2>],
    handler: Handler<S, P1 | P2>,
  ): MiddlewareBuilder<S, D>;
  cases<P1, P2, P3>(
    actionCreators: [
      ActionCreator<P1>,
      ActionCreator<P2>,
      ActionCreator<P3>
    ],
    handler: Handler<S, P1 | P2 | P3>,
  ): MiddlewareBuilder<S, D>;
  cases<P1, P2, P3, P4>(
    actionCreators: [
      ActionCreator<P1>,
      ActionCreator<P2>,
      ActionCreator<P3>,
      ActionCreator<P4>
    ],
    handler: Handler<S, P1 | P2 | P3 | P4>,
  ): MiddlewareBuilder<S, D>;
  cases<P>(
    actionCreators: Array<ActionCreator<P>>,
    handler: Handler<S, P, D>,
  ): MiddlewareBuilder<S, D>;

  <S>(api: MiddlewareAPI<D, S>): (next: Dispatch) => Dispatch;
}

export type Handler<S, P, D extends Dispatch = Dispatch> = (
  api: MiddlewareAPI<D, S>,
  next: D,
  action: Action<P>,
) => void;

interface Case<S, P, D extends Dispatch = Dispatch> {
  actionCreator: ActionCreator<P>;
  handler: Handler<S, P, D>;
}

type CaseMap<S, D extends Dispatch = Dispatch> = Map<string, Array<Case<S, any, D>>>;

export function middleware<S, D extends Dispatch = Dispatch>(): MiddlewareBuilder<S, D> {

  const cases: CaseMap<S, D> = new Map<string, Array<Case<S, any, D>>>();
  const middleware = getMiddlewareFunction<S, D>(cases) as MiddlewareBuilder<S, D>;

  middleware.case = <P>(
    actionCreator: ActionCreator<P>,
    handler: Handler<S, P, D>,
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
    handler: Handler<S, P, D>,
  ) => {
    for (const actionCreator of actionCreators) {
      middleware.case(actionCreator, handler);
    }
    return middleware;
  };

  return middleware;
}

function getMiddlewareFunction<S, D extends Dispatch = Dispatch, A extends Action<any> = Action<any>>(
  cases: CaseMap<S, D>,
) {
  return (api: MiddlewareAPI<D, S>) => (next: D) => (action: A) => {
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
