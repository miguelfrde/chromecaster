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

  static defaultProps = {
    selected: false
  }

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object
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
    const iconColor = (this.props.selected)?
                      Colors.fullWhite :
                      Colors.indigo400;

    switch (this.props.type) {
      case 'photos':
        return (
          <img style={styles.img} src={this.props.path}/>
        );
      case 'videos':
        return (
          <FontIcon className="material-icons" style={styles.icon} color={iconColor}>
            videocam
          </FontIcon>
        );
      default:
        return (
          <FontIcon className="material-icons" style={styles.icon} color={iconColor}>
            video library
          </FontIcon>
        );
    }
  }

  render() {
    const color = (this.props.selected)? Colors.indigo400 : Colors.fullWhite;
    const fontColor = (this.props.selected)?
                      Colors.fullWhite :
                      this.context.muiTheme.getCurrentTheme().palette.textColor;
    const styles = {
      item: {
        width: '22%',
        margin: 20,
        marginLeft: 0,
        marginTop: 0,
        display: 'inline-block',
        zIndex: -1,
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: color
      },
      thumbnailContainer: {
        height: 165,
        verticalAlign: 'medium'
      },
      name: {
        color: fontColor,
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
