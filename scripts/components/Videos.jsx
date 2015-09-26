import React from 'react';
import { connect } from 'react-redux'
import { Styles } from 'material-ui';

import Section from './Section.jsx';
import CastButton from './CastButton.jsx';
import DirectoryLoader from './DirectoryLoader.jsx';

import { updateVideosPath } from '../actions';

const ThemeManager = new Styles.ThemeManager();

@connect(state => ({
  videosPath: state.videosPath,
  setVideosPath: state.setVideosPath
}))
export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this._handleChangePath = this._handleChangePath.bind(this);
    this.extensions = ['.mp4', '.mkv', '.avi'];
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
    this.props.dispatch(updateVideosPath(newPath));
  }

  render() {
    const videosPath = this.props.videosPath;
    return (
      <Section>
        <DirectoryLoader onChangePath={this._handleChangePath} initialPath={videosPath}/>
        <CastButton/>
      </Section>
    );
  }
}
