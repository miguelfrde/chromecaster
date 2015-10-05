import React from 'react';
import { Styles } from 'material-ui';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';
import MediaContainer from './MediaContainer.jsx';

const ThemeManager = new Styles.ThemeManager();

export default class MediaSection extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Section>
        <DirectoryLoader/>
        <MediaContainer/>
        <CastButton/>
      </Section>
    );
  }
}
