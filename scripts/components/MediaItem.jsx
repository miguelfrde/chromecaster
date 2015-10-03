import React from 'react';
import path from 'path';
import { Paper, Styles } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default class MediaoItem extends React.Component {
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
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      loading: {
        margin: '60px 80px',
        position: 'absolute',
        display: 'block'
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
        <img style={styles.img} src={this.props.path}/>
        <p style={styles.name}>
          {path.basename(this.props.path, path.extname(this.props.path))}
        </p>
      </Paper>
    );
  }
}
