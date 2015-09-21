import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App.jsx';
import Photos from './components/Photos.jsx';
import Videos from './components/Videos.jsx';
import Home from './components/Home.jsx';


export default (
  <Route name="app" path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path="photos" component={Photos} />
    <Route path="videos" component={Videos} />
    <Redirect from="/" to="/home"/>
  </Route>
);
