import View_AppMiddleware from './View/AppMiddleware';

import AppLogic_CounterMiddleware from './AppLogic/CounterMiddleware';
import AppLogic_TodoMiddleware from './AppLogic/TodoMiddleware';

export default [
  View_AppMiddleware,

  AppLogic_CounterMiddleware,
  AppLogic_TodoMiddleware,
];

