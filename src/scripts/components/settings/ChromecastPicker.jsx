import React from 'react';
import { DropDownMenu, FlatButton } from 'material-ui';


export default class ChromecastPicker extends React.Component {
  constructor(props) {
    super(props);
    this._getAvailableChromecasts = this._getAvailableChromecasts.bind(this);
  }

  _getAvailableChromecasts() {
    // TODO: get real chromecasts
    return [
      { payload: '1', text: 'Chromecast one' },
      { payload: '2', text: 'Chromecast two' },
      { payload: '3', text: 'Chromecast three' },
      { payload: '4', text: 'Chromecast four' },
      { payload: '5', text: 'Chromecast five' }
    ];
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
          menuItems={this._getAvailableChromecasts()}
          style={styles.dropdown}/>
        <FlatButton label="Refresh" primary={true} style={styles.refreshBtn}/>
      </div>
    );
  }
}
