import React from 'react';
import Router from 'react-router';
import { AppCanvas, Styles } from 'material-ui';
import MenuBar from './MenuBar.jsx';

const ThemeManager = new Styles.ThemeManager();
const Colors = Styles.Colors;

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    selectedTab: React.PropTypes.string,
    children: React.PropTypes.node
  }

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
  }

  render() {
    return (
      <AppCanvas>
        <MenuBar />
        {this.props.children}
      </AppCanvas>
    );
  }
}
