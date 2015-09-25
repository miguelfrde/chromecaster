import React from 'react';
import { RaisedButton, Styles } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();


export default class DirectoryLoader extends React.Component {
  constructor(props) {
    super(props);
    this._handleOnClick = this._handleOnClick.bind(this);
  }

  state = { currentPath: '/Users/miguel/Pictures' };

  static propTypes = {
    onPathChange: React.PropTypes.func.isRequired
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
    return (
      <div>
        <h1 style={styles.dirName}>Directory name</h1>
        <RaisedButton
          primary={true}
          label="Change path"
          style={styles.pickerButton}
          onClick={this._handleOnClick}/>
      </div>
    );
  }
}
