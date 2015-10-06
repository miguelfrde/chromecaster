import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, Styles } from 'material-ui';

import { hideNotification } from '../actions';
import { notificationSelector } from '../selectors';


const ThemeManager = new Styles.ThemeManager();

@connect(notificationSelector)
export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this._close = this._close.bind(this);
    this._dismiss = this._dismiss.bind(this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    message: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentDidUpdate() {
    if (this.props.visible) {
      this.refs.snackbar.show();
    }
  }

  _close() {
    this.props.dispatch(hideNotification());
  }

  _dismiss() {
    this.props.dispatch(hideNotification());
  }

  render() {
    return (
      <Snackbar
        message={this.props.message}
        action="ok"
        autoHideDuration={2000}
        onActionTouchTap={this._close}
        ref="snackbar"
        onDismiss={this._dismiss}/>
    );
  }
}
