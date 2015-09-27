import React from 'react';
import path from 'path';
import { Paper, Styles } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default class PhotoItem extends React.Component {
  static propTypes = {
    path: React.PropTypes.string.isRequired
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
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
        textAlign: 'center'
      },
      img: {
        maxWidth: '100%',
        height: 165,
        zIndex: -1
      },
      name: {
        textAlign: 'left',
        margin: 5,
        fontSize: '0.8rem'
      }
    };
    return (
      <Paper zDepth={1} style={styles.item}>
        <img src={this.props.path} style={styles.img}/>
        <p style={styles.name}>
          {path.basename(this.props.path, path.extname(this.props.path))}
        </p>
      </Paper>
    );
  }
}
