import React from 'react';
import { connect } from 'react-redux';
import { DropDownMenu, FlatButton } from 'material-ui';

import ChromecastService from '../../services/ChromecastService.js';
import { updateAvailableChromecasts } from '../../actions';


@connect(state => ({}))
export default class ChromecastPicker extends React.Component {
  constructor(props) {
    super(props);
    this._getChromecastItems = this._getChromecastItems.bind(this);
    this._refresh = this._refresh.bind(this);
    this.state = { disabled: false };
  }

  static propTypes = {
    chromecasts: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  _getChromecastItems() {
    const players = this.props.chromecasts;
    if (players.length > 0) {
      return players.map((player, index) => ({ payload: index, text: player.name }));
    }
    return [{ payload: 1, text: 'There are no chromecasts available'}];
  }

  _refresh() {
    const players = ChromecastService.availableChromecasts();
    this.props.dispatch(updateAvailableChromecasts(players));
  }

  render() {
    const styles = {
      container: { marginBottom: 30 },
      dropdown: { marginTop: -15 },
      refreshBtn: { position: 'absolute' }
    };

    return (
      <div className="chromecastPicker" style={styles.container}>
        <p>Pick your chromecast:</p>
        <DropDownMenu
          menuItems={this._getChromecastItems()}
          style={styles.dropdown}
          disabled={this.props.chromecasts.length === 0}/>
        <FlatButton
          label="Refresh"
          primary={true}
          style={styles.refreshBtn}
          onClick={this._refresh}/>
      </div>
    );
  }
}
