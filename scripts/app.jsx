import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './store/configureStore.js';
import routes from './routes.jsx';


require('../style/main.scss');

injectTapEventPlugin();

const history = createHashHistory();
const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <Router history={history} routes={routes}/>}
  </Provider>,
  document.body
);
