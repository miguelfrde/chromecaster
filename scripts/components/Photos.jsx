import React from 'react';
import { Styles } from 'material-ui';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';

const ThemeManager = new Styles.ThemeManager();


export default class Photos extends React.Component {
  consturctor() {
    this._handlePathChange = this._handlePathChange.bind(this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handlePathChange(newPath) {
    console.log(newPath);
  }

  render() {
    return (
      <Section>
        <DirectoryLoader onPathChange={this._handlePathChange}/>
        <CastButton/>
      </Section>
    );
  }
}
