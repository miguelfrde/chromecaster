import React from 'react';
import Router from 'react-router';
import { Dialog, FlatButton, DropDownMenu } from 'material-ui';


export default class SettingsDialog extends React.Component {
  constructor(props) {
    super(props);
    this._handleCustomDialogClose = this._handleCustomDialogClose.bind(this);
    this._handleCustomDialogSave = this._handleCustomDialogSave.bind(this);
    this.open = this.open.bind(this);
    this.getAvailableChromecasts = this.getAvailableChromecasts.bind(this);
  }

  _handleCustomDialogClose() {
    this.refs.dialog.dismiss();
  }

  _handleCustomDialogSave() {
    // TODO: locate chromecasts, select preferred chromecast
    this.refs.dialog.dismiss();
  }

  open() {
    this.refs.dialog.show();
  }

  getAvailableChromecasts() {
    return [
      { payload: '1', text: 'Chromecast one' },
      { payload: '2', text: 'Chromecast two' },
      { payload: '3', text: 'Chromecast three' },
      { payload: '4', text: 'Chromecast four' },
      { payload: '5', text: 'Chromecast five' }
    ];
  }

  render() {
    const customActions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this._handleCustomDialogClose}
        key="close"/>,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this._handleCustomDialogSave}
        key="save"/>
    ];

    return (
      <Dialog title="Settings"
              actions={customActions}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              modal={true}
              ref="dialog">
        <div style={{height: '2000px'}}>
          <p>Pick your chromecast:</p>
          <DropDownMenu menuItems={this.getAvailableChromecasts()} />
        </div>
      </Dialog>
    );
  }
}
