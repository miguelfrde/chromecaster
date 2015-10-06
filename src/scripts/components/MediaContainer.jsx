import React from 'react';
import { connect } from 'react-redux';
import { Styles } from 'material-ui';

import MediaItem from './MediaItem.jsx';
import CastingController from './CastingController.jsx';
import { currentMediaSelector } from '../selectors';

const ThemeManager = new Styles.ThemeManager();


@connect(currentMediaSelector)
export default class MediaContainer extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    mediaFiles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    mediaType: React.PropTypes.string.isRequired,
    mediaFileIndex: React.PropTypes.number.isRequired,
    selectedMediaFile: React.PropTypes.string.isRequired
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const style = {
      container: {
        marginTop: 0,
        width: '100%',
        float: 'left',
        overflow: 'scroll',
        height: 582,
        padding: '0 3%'
      }
    }

    const items = (
      this.props.mediaFiles.map((file, index) =>
        <MediaItem key={index} index={index} path={file}
                   type={this.props.mediaType}
                   selected={this.props.mediaFileIndex == index}/>
    ));

    return (
      <div style={style.container}>
        <CastingController castFile={this.props.selectedMediaFile} style={{marginTop: 20}}/>
        {items}
      </div>
    );
  }
}
