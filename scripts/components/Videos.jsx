import React from 'react';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';


export default class Videos extends React.Component {
  render() {
    return (
      <Section>
        <DirectoryLoader onPathChange={this._handleDirectoryChange}/>
        <CastButton/>
      </Section>
    );
  }
}
