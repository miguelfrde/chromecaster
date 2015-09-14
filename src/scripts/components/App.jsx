const React = require('react');
const Router = require('react-router');
const mui = require('material-ui');
const { AppCanvas, Styles } = require('material-ui');
const ThemeManager = new Styles.ThemeManager();
const RouteHandler = Router.RouteHandler;

const MenuBar = require('./MenuBar.jsx');


const App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    selectedTab: React.PropTypes.string
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <AppCanvas>
        <MenuBar />
        <RouteHandler />
      </AppCanvas>
    );
  }
});

module.exports = App;
