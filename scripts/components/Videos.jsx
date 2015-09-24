import React from 'react';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';


export default class Videos extends React.Component {
  render() {
    return (
      <Section>
        <h1>Videos</h1>
        <CastButton/>
      </Section>
    );
  }
}
