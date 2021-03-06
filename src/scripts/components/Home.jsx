import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, FontIcon, Styles } from 'material-ui';
import SettingsDialog from './SettingsDialog.jsx';
import Section from './Section.jsx';
import { openSettingsDialog } from '../actions';

const ThemeManager = new Styles.ThemeManager();
const Colors = Styles.Colors;


@connect(state => ({}))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this._openSettings = this._openSettings.bind(this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _openSettings() {
    this.props.dispatch(openSettingsDialog());
  }

  render() {
    const styles = {
      container: {
        padding: 32,
        textAlign: 'center'
      },
      welcome: {
        fontSize: 36,
        textWeight: '400'
      },
      logo: {
        width: 256
      },
      instructions: {
        fontSize: 24
      },
      footer: {
        marginTop: 149,
        display: 'box',
        boxAlign: 'end',
        boxPack: 'center',
        fontSize: 12,
        color: Colors.lightBlack
      },
      loveIcon: {
        fontSize: 14
      }
    };

    const loveIcon = (
      <FontIcon
          className="material-icons"
          color={Colors.lightBlack}
          style={styles.loveIcon}>
        favorite
      </FontIcon>
    );

    return (
      <Section>
        <div style={styles.container}>
          <p style={styles.welcome}>Welcome</p>
          <img src="images/chromecaster.png" style={styles.logo}/>
          <p style={styles.instructions}>To begin connect to your Chromecast</p>
          <RaisedButton label="Connect"
                        primary={true}
                        onTouchTap={this._openSettings}/>
          <div style={styles.footer}>
            Built with {loveIcon} by miguelfrde
          </div>
        </div>
      </Section>
    );
  }
}
