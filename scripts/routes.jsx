import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Photos from './components/Photos.jsx';
import Videos from './components/Videos.jsx';
import Home from './components/Home.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/photos" component={Photos} />
    <Route path="/videos" component={Videos} />
  </Route>
);
