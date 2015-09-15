import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx';
import Photos from './components/Photos.jsx';
import Videos from './components/Videos.jsx';
import Home from './components/Home.jsx';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="photos" handler={Photos} />
    <Route name="videos" handler={Videos} />
  </Route>
);

module.exports = AppRoutes;
