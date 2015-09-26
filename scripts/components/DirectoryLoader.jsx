import React from 'react';
import path from 'path';
import { RaisedButton, Styles } from 'material-ui';
import remote from 'remote';

const dialog = remote.require('dialog');
const ThemeManager = new Styles.ThemeManager();


export default class DirectoryLoader extends React.Component {
  constructor(props) {
    super(props);
    this._handleOnClick = this._handleOnClick.bind(this);
    this.state = { currentPath: this.props.initialPath };
  }

  static propTypes = {
    onChangePath: React.PropTypes.func.isRequired
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
      defaultPath: this.state.currentPath,
      properties: ['openDirectory']
    }
    dialog.showOpenDialog(options, (directoriesChosen) => {
      if (directoriesChosen && directoriesChosen.length > 0) {
        this.setState({ currentPath: directoriesChosen[0] });
        this.props.onChangePath(directoriesChosen[0]);
      }
    });
  }

  render() {
    const styles  = {
      dirName: {
        float: 'left'
      },
      pickerButton: {
        float: 'right',
        display: 'inline-block',
        margin: '0.83em 0'
      }
    };

    const pathName = path.basename(this.state.currentPath);

    return (
      <div>
        <h1 style={styles.dirName}>{pathName}</h1>
        <RaisedButton
          primary={true}
          label="Change path"
          style={styles.pickerButton}
          onClick={this._handleOnClick}/>
      </div>
    );
  }
}
