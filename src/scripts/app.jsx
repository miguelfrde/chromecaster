import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './store/configureStore.js';
import routes from './routes.jsx';
import ChromecastService from './services/ChromecastService.js';
import ServerService from './services/ServerService.js';
import { selectPreviousMediaItem,
         selectNextMediaItem,
         updateAvailableChromecasts } from './actions';
import network from 'network-address';

injectTapEventPlugin();

const history = createHashHistory();
const store = configureStore();

document.onkeydown = function (e) {
  const action = {
    "Left": selectPreviousMediaItem,
    "Right": selectNextMediaItem,
  };
  if (action[e.keyIdentifier]) {
    store.dispatch(action[e.keyIdentifier]());
  }
}

ChromecastService.watch(
  players => store.dispatch(updateAvailableChromecasts(players)));

ServerService.server().listen(0);

React.render(
  <Provider store={store}>
    {() => <Router history={history} routes={routes}/>}
  </Provider>,
  document.body
);
