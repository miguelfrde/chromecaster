import React from 'react';
import Router from 'react-router';
import { Dialog, FlatButton, DropDownMenu } from 'material-ui';


const SettingsDialog = React.createClass({
  _handleCustomDialogClose() {
    this.refs.dialog.dismiss();
  },

  _handleCustomDialogSave() {
    // TODO: locate chromecasts, select preferred chromecast
    this.refs.dialog.dismiss();
  },

  open() {
    this.refs.dialog.show();
  },

  getAvailableChromecasts() {
    return [
      { payload: '1', text: 'Chromecast one' },
      { payload: '2', text: 'Chromecast two' },
      { payload: '3', text: 'Chromecast three' },
      { payload: '4', text: 'Chromecast four' },
      { payload: '5', text: 'Chromecast five' }
    ];
  },

  render() {
    const customActions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this._handleCustomDialogClose} />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this._handleCustomDialogSave} />
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
});

module.exports = SettingsDialog;
