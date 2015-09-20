import React from 'react';
import Router from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRoutes from './app-routes.jsx';

require('../style/main.scss');

const remote = window.require('remote');

window.React = React;

injectTapEventPlugin();

Router
  .create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
  })
  .run(function (Handler) {
    React.render(<Handler/>, document.body);
  });
