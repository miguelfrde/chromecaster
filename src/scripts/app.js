const React = require('react');
const Router = require('react-router');
const injectTapEventPlugin = require('react-tap-event-plugin');
const AppRoutes = require('./app-routes.js');
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
