import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import MediaSection from './components/MediaSection.jsx';
import Home from './components/Home.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/photos" component={MediaSection} />
    <Route path="/videos" component={MediaSection} />
  </Route>
);
