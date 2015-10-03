import React from 'react';
import path from 'path';
import { FontIcon, Paper, Styles } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();
const Colors = Styles.Colors;

export default class MediaItem extends React.Component {
  constructor(props) {
    super(props);
    this._thumbnail = this._thumbnail.bind(this);
  }

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _thumbnail() {
    const styles = {
      img: {
        maxWidth: '100%',
        zIndex: -1
      },
      icon: {
        top: '25%',
        fontSize: '6em'
      }
    }

    switch (this.props.type) {
      case 'photos':
        return (
          <img style={styles.img} src={this.props.path}/>
        );
      case 'videos':
        return (
          <FontIcon className="material-icons" style={styles.icon} color={Colors.indigo400}>
            videocam
          </FontIcon>
        );
      default:
        return (
          <FontIcon className="material-icons" style={styles.icon} color={Colors.indigo400}>
            video library
          </FontIcon>
        );
    }
  }

  render() {
    const styles = {
      item: {
        width: '22%',
        margin: 20,
        marginLeft: 0,
        marginTop: 0,
        display: 'inline-block',
        zIndex: -1,
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      thumbnailContainer: {
        height: 165,
        verticalAlign: 'medium'
      },
      name: {
        textAlign: 'left',
        margin: 5,
        fontSize: '0.8rem'
      }
    };
    return (
      <Paper zDepth={1} style={styles.item}>
        <div style={styles.thumbnailContainer}>
          {this._thumbnail()}
        </div>
        <p style={styles.name}>
          {path.basename(this.props.path, path.extname(this.props.path))}
        </p>
      </Paper>
    );
  }
}
