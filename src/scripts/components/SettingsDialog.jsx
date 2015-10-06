import React from 'react';
import { connect } from 'react-redux';
import Router from 'react-router';
import { Dialog, FlatButton } from 'material-ui';

import ChromecastPicker from './settings/ChromecastPicker.jsx';
import AutoChangeMediaSelector from './settings/AutoChangeMediaSelector.jsx';
import { closeSettingsDialog } from '../actions';
import { settingsSelector } from '../selectors';


@connect(settingsSelector)
export default class SettingsDialog extends React.Component {
  constructor(props) {
    super(props);
    this._handleCustomDialogClose = this._handleCustomDialogClose.bind(this);
  }

  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    changeMediaItemSeconds: React.PropTypes.number.isRequired,
    availableChromecasts: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  _handleCustomDialogClose() {
    this.props.dispatch(closeSettingsDialog());
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.refs.dialog.show();
    } else {
      this.refs.dialog.dismiss();
    }
  }

  render() {
    const customActions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this._handleCustomDialogClose}
        key="close"/>,
    ];

    return (
      <Dialog title="Settings"
              actions={customActions}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              modal={true}
              ref="dialog">
        <div style={{height: 800}}>
          <ChromecastPicker chromecasts={this.props.availableChromecasts}/>
          <AutoChangeMediaSelector seconds={this.props.changeMediaItemSeconds}/>
        </div>
      </Dialog>
    );
  }
}
