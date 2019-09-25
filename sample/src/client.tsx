import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import routes from './routes';
import reducer from './reducers';
import middlewares from './middlewares';

// for Debug
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// const composeEnhancers = composeWithDevTools({});

// for Production
const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      ...middlewares,
    ),
  ),
);

const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content'),
);
