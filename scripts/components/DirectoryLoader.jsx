import React from 'react';
import path from 'path';
import { connect } from 'react-redux';
import { RaisedButton, Paper, Styles } from 'material-ui';
import remote from 'remote';

import { updateMediaPath } from '../actions';
import { currentMediaSelector } from '../selectors';

const dialog = remote.require('dialog');
const ThemeManager = new Styles.ThemeManager();


@connect(currentMediaSelector)
export default class DirectoryLoader extends React.Component {
  constructor(props) {
    super(props);
    this._handleOnClick = this._handleOnClick.bind(this);
  }

  static propTypes = {
   mediaPath: React.PropTypes.string.isRequired
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleOnClick() {
    const options = {
      title: 'Choose media directory',
      defaultPath: this.props.mediaPath,
      properties: ['openDirectory']
    }
    dialog.showOpenDialog(options, (directoriesChosen) => {
      if (directoriesChosen && directoriesChosen.length > 0) {
        this.props.dispatch(updateMediaPath(directoriesChosen[0]));
      }
    });
  }

  render() {
    const styles  = {
      container: {
        width: '100%',
        display: 'block',
        float: 'left',
        backgroundColor: Styles.Colors.indigo400,
        color: Styles.Colors.white,
        padding: 32
      },
      dirName: {
        float: 'left'
      },
      pickerButton: {
        float: 'right',
        display: 'inline-block',
        margin: '0.83em 0'
      }
    };

    const pathName = path.basename(this.props.mediaPath);

    return (
      <Paper zDepth={2} rounded={false} style={styles.container}>
        <h1 style={styles.dirName}>{pathName}</h1>
        <RaisedButton
          zDepth={3}
          primary={true}
          label="Change path"
          style={styles.pickerButton}
          onClick={this._handleOnClick}/>
      </Paper>
    );
  }
}
