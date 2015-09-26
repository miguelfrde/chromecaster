import React from 'react';
import { Styles } from 'material-ui';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';

const ThemeManager = new Styles.ThemeManager();


export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this._handleChangePath = this._handleChangePath.bind(this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleChangePath(newPath) {
    // TODO: dispatch SET_VIDEOS_PATH
    console.log(newPath);
  }

  render() {
    return (
      <Section>
        <DirectoryLoader onChangePath={this._handleChangePath}/>
        <CastButton/>
      </Section>
    );
  }
}
