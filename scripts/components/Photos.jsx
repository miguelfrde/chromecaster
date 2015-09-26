import React from 'react';
import { connect } from 'react-redux';
import { Styles } from 'material-ui';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';

import { updatePhotosPath } from '../actions';

const ThemeManager = new Styles.ThemeManager();

@connect(state => ({
  photosPath: state.photosPath,
  setPhotosPath: state.setPhotosPath
}))
export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    this._handleChangePath = this._handleChangePath.bind(this);
    this.extensions = ['.jpg', '.jpeg', '.png'];
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
    this.props.dispatch(updatePhotosPath(newPath));
  }

  render() {
    const photosPath = this.props.photosPath;
    return (
      <Section>
        <DirectoryLoader onChangePath={this._handleChangePath} initialPath={photosPath} />
        <CastButton/>
      </Section>
    );
  }
}
