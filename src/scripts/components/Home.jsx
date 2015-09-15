import React from 'react';
import { RaisedButton, FontIcon, Styles } from 'material-ui';
import Section from './Section.jsx';

const ThemeManager = new Styles.ThemeManager();
const Colors = Styles.Colors;


const Home = React.createClass({
  render() {
    const styles = {
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
        <p style={styles.welcome}>Welcome</p>
        <img src="images/chromecaster.png" style={styles.logo}/>
        <p style={styles.instructions}>To begin connect to your Chromecast</p>
        <RaisedButton label="Connect" primary={true} />
        <div style={styles.footer}>
          Built with {loveIcon} by miguelfrde
        </div>
      </Section>
    );
  }
});

module.exports = Home;
