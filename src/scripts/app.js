const React = require('react');
const Main = require('./components/Main.js');

const remote = window.require('remote');

window.React = React;

React.render(<Main />, document.querySelector('#chromecaster-app'));
