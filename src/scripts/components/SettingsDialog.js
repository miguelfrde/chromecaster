const React = require('react');
const Router = require('react-router');
const { Dialog, FlatButton } = require('material-ui');

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
        <div style={{height: '2000px'}}>Settings</div>
      </Dialog>
    );
  }
});

module.exports = SettingsDialog;
