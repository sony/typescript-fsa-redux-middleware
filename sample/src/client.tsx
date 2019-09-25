import * as React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { createStore } from 'redux-dynamic-modules';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// application imports
import { IState, AppModules } from './modules/app';
import routes from './routes';

// for Debug
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
const composeEnhancer = composeWithDevTools({});

// for Production
// const composeEnhancer = compose;

// Create redux-dynamic-modules style store
const store = createStore<IState>(
  /* initial state */       {},
  /* enhancers */           [composeEnhancer],
  /* Extensions to load */  [],
  /* user modules */        ...AppModules );

const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content'),
);
