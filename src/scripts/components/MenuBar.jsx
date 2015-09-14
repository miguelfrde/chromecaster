const React = require('react');
const Router = require('react-router');
const mui = require('material-ui');
const { AppBar, IconButton, AppCanvas, Styles, Tabs, Tab, Paper } = require('material-ui');
const { Colors, Spacing, Typography } = Styles;

const SettingsDialog = require('./SettingsDialog.jsx');

const menuItems = [
  { route: 'photos', text: 'Photos' },
  { route:  'videos', text: 'Videos' }
];

const MenuBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    selectedTab: React.PropTypes.string
  },

  componentWillMount() {
    this.setState({tabIndex: this._getSelectedIndex()});
  },

  componentWillReceiveProps() {
    this.setState({tabIndex: this._getSelectedIndex()});
  },

  openSettingsModal() {
    this.refs.settingsModal.open();
  },

  _getSelectedIndex() {
    return this.context.router.isActive('photos') ? 'photos' :
      this.context.router.isActive('videos') ? 'videos' : 'home';
  },

  _handleTabChange(value, e, tab) {
    this.context.router.transitionTo(tab.props.route);
    this.setState({tabIndex: this._getSelectedIndex()});
  },

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
        right: (Spacing.desktopGutter/2) - 48,
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
          <Tabs value={this.state.tabIndex}
                onChange={this._handleTabChange}
                styles={styles.tabs}>
            <Tab label="PHOTOS" value="photos" route="photos" style={styles.tab} />
            <Tab label="VIDEOS" value="videos" route="videos" style={styles.tab} />
          </Tabs>
        </div>
      </Paper>
    );
  },

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
      <AppBar title="Chromecaster"
              showMenuIconButton={false}
              menuItems={menuItems}
              iconElementRight={settingsButton}
              style={{position: 'fixed', top: 0, zIndex: 0}} />
    );
  },

  render() {
    return (
      <div>
        {this._appBar()}
        {this._tabs()}
        <SettingsDialog ref="settingsModal"/>
      </div>
    );
  }
});

module.exports = MenuBar;
