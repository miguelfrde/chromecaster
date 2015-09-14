const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const App = require('./components/App.jsx');
const Photos = require('./components/Photos.jsx');
const Videos = require('./components/Videos.jsx');
const Home = require('./components/Home.jsx');

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="photos" handler={Photos} />
    <Route name="videos" handler={Videos} />
  </Route>
);

module.exports = AppRoutes;
