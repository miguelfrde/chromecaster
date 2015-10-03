import React from 'react';
import { connect } from 'react-redux';
import { Styles } from 'material-ui';

import MediaItem from './MediaItem.jsx';
import { currentMediaSelector } from '../selectors';

const ThemeManager = new Styles.ThemeManager();

@connect(currentMediaSelector)
export default class MediaContainer extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    mediaFiles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
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
    return (
      <div style={style.container}>
        <div style={{marginTop: 20}}></div>
        { this.props.mediaFiles.map((file, index) =>
          <MediaItem key={index} path={file}/>
        )}
      </div>
    );
  }
}
