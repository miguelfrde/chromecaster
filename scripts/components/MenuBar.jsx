import React from 'react';
import Router from 'react-router';
import { AppBar, IconButton, AppCanvas, Styles, Tabs, Tab, Paper } from 'material-ui';
import SettingsDialog from './SettingsDialog.jsx';

const { Colors, Spacing, Typography } = Styles;


export default class MenuBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._handleTabChange = this._handleTabChange.bind(this);
    this._tabs = this._tabs.bind(this);
    this._appBar = this._appBar.bind(this);
  }

  componentWillMount() {
    this.setState({tabIndex: this._getSelectedIndex()});
  }

  componentWillReceiveProps() {
    this.setState({tabIndex: this._getSelectedIndex()});
  }

  openSettingsModal() {
    this.refs.settingsModal.open();
  }

  _getSelectedIndex() {
  }

  _handleTabChange(value, e, tab) {
  }

  _tabs() {
    const styles = {
      root: {
        backgroundColor: 'transparent',
        position: 'fixed',
        height: 64,
        top: 0,
        left: 0,
        zIndex: 4,
        width: '90%'
      },
      container: {
        position: 'absolute',
        bottom: 0,
      },
      tabs: {
        width: 425,
        bottom:0,
      },
      tab: {
        fontSize: 16,
        height: 64,
        padding: '0 20px'
    }};

    return (
      <Paper zDepth={0}
             rounded={false}
             style={styles.root}>
        <div style={styles.container}>
          <Tabs value={this._getSelectedIndex()}
                onChange={this._handleTabChange}
                styles={styles.tabs}>
            <Tab label="PHOTOS" value="photos" route="photos" style={styles.tab} />
            <Tab label="VIDEOS" value="videos" route="videos" style={styles.tab} />
          </Tabs>
        </div>
      </Paper>
    );
  }

  _appBar() {
    const settingsButton = (
      <IconButton
          iconClassName="material-icons"
          onClick={this.openSettingsModal}
          linkButton={false}>
        settings
      </IconButton>
    );
    return (
      <AppBar showMenuIconButton={false}
              iconElementRight={settingsButton}
              style={{position: 'fixed', top: 0, zIndex: 0}} />
    );
  }

  render() {
    return (
      <div>
        {this._appBar()}
        {this._tabs()}
        <SettingsDialog ref="settingsModal"/>
      </div>
    );
  }
}
