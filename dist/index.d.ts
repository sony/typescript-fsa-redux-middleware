import { Dispatch, MiddlewareAPI } from "redux";
import { Action, ActionCreator } from "typescript-fsa";
export interface MiddlewareBuilder<S> {
    case<P>(actionCreator: ActionCreator<P>, handler: Handler<S, P>): MiddlewareBuilder<S>;
    cases<P1>(actionCreators: [ActionCreator<P1>], handler: Handler<S, P1>): MiddlewareBuilder<S>;
    cases<P1, P2>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>], handler: Handler<S, P1 | P2>): MiddlewareBuilder<S>;
    cases<P1, P2, P3>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>], handler: Handler<S, P1 | P2 | P3>): MiddlewareBuilder<S>;
    cases<P1, P2, P3, P4>(actionCreators: [ActionCreator<P1>, ActionCreator<P2>, ActionCreator<P3>, ActionCreator<P4>], handler: Handler<S, P1 | P2 | P3 | P4>): MiddlewareBuilder<S>;
    cases<P>(actionCreators: Array<ActionCreator<P>>, handler: Handler<S, P>): MiddlewareBuilder<S>;
    <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
}
export declare type Handler<S, P> = (api: MiddlewareAPI<S>, next: Dispatch<S>, action: Action<P>) => void;
export declare function middleware<S>(): MiddlewareBuilder<S>;
