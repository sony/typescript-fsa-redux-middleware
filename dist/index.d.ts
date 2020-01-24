import { Dispatch, MiddlewareAPI } from "redux";
import { Action, ActionCreator, Failure } from "typescript-fsa";
export interface MiddlewareBuilder<S, D extends Dispatch = Dispatch> {
    case<P>(actionCreator: ActionCreator<P>, handler: Handler<S, P, D>): MiddlewareBuilder<S, D>;
    cases<P1>(actionCreators: [ActionCreator<P1>], handler: Handler<S, P1>): MiddlewareBuilder<S, D>;
    cases<P1, P2>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>], handler: Handler<S, P1 | P2>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>], handler: Handler<S, P1 | P2 | P3>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3, P4>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>], handler: Handler<S, P1 | P2 | P3 | P4>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3, P4, P5>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>, ActionCreator<P5>], handler: Handler<S, P1 | P2 | P3 | P4 | P5>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3, P4, P5, P6>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>, ActionCreator<P5>, ActionCreator<P6>], handler: Handler<S, P1 | P2 | P3 | P4 | P5 | P6>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3, P4, P5, P6, P7>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>, ActionCreator<P5>, ActionCreator<P6>, ActionCreator<P7>], handler: Handler<S, P1 | P2 | P3 | P4 | P5 | P6 | P7>): MiddlewareBuilder<S, D>;
    cases<P1, P2, P3, P4, P5, P6, P7, P8>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>, ActionCreator<P5>, ActionCreator<P6>, ActionCreator<P7>, ActionCreator<P8>], handler: Handler<S, P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8>): MiddlewareBuilder<S, D>;
    cases<P>(actionCreators: Array<ActionCreator<P>>, handler: Handler<S, P, D>): MiddlewareBuilder<S, D>;
    cases(actionCreators: Array<ActionCreator<Failure<any, Error>>>, handler: Handler<S, Failure<any, Error>, D>): MiddlewareBuilder<S, D>;
    <S>(api: MiddlewareAPI<D, S>): (next: Dispatch) => Dispatch;
}
export declare type Handler<S, P, D extends Dispatch = Dispatch> = (api: MiddlewareAPI<D, S>, next: D, action: Action<P>) => void;
export declare function middleware<S, D extends Dispatch = Dispatch>(): MiddlewareBuilder<S, D>;
