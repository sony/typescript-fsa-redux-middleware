"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function middleware() {
    const cases = new Map();
    const middleware = getMiddlewareFunction(cases);
    middleware.case = (actionCreator, handler) => {
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
    middleware.cases = (actionCreators, handler) => {
        for (const actionCreator of actionCreators) {
            middleware.case(actionCreator, handler);
        }
        return middleware;
    };
    return middleware;
}
exports.middleware = middleware;
function getMiddlewareFunction(cases) {
    return (api) => (next) => (action) => {
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
//# sourceMappingURL=index.js.map