const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const App = require('./components/App.js');
const Photos = require('./components/Photos.js');
const Videos = require('./components/Videos.js');
const Home = require('./components/Home.js');

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="photos" handler={Photos} />
    <Route name="videos" handler={Videos} />
  </Route>
);

module.exports = AppRoutes;
