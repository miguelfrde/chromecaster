const React = require('react');
const Router = require('react-router');
const mui = require('material-ui');
const { AppCanvas, Styles } = require('material-ui');
const ThemeManager = new Styles.ThemeManager();
const RouteHandler = Router.RouteHandler;
const Colors = Styles.Colors;

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
    ThemeManager.setPalette({
      primary1Color: Colors.indigo500,
      primary2Color: Colors.indigo700,
      primary3Color: Colors.indigo100,
      accent1Color: Colors.pinkA200,
      accent2Color: Colors.pinkA400,
      accent3Color: Colors.pinkA100,
      textColor: Colors.darkBlack,
      canvasColor: Colors.fullWhite,
      borderColor: Colors.faintBlack,
      disabledColor: 'rgba(0, 0, 0, 0.38)'
    });
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
