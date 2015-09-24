import React from 'react';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';

export default class Photos extends React.Component {
  render() {
    return (
      <Section>
        <h1>Photos</h1>
        <CastButton/>
      </Section>
    );
  }
}
