import React from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon, Styles } from 'material-ui'

import { toggleCasting, selectNextMediaItem, notify } from '../actions';
import { castingSelector } from '../selectors';


const ThemeManager = new Styles.ThemeManager();

@connect(castingSelector)
export default class CastButton extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._mediaItemChanger = this._mediaItemChanger.bind(this);
  }

  static propTypes = {
    casting: React.PropTypes.bool.isRequired,
    changeMediaItemSeconds: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleClick() {
    if (this.props.chromecast) {
      this.props.dispatch(toggleCasting());
    } else {
      this.props.dispatch(notify('No chromecast available'));
    }
  }

  _mediaItemChanger() {
    if (this.props.changeMediaItemSeconds) {
      setTimeout(() => {
        if (this.props.casting) {
          this.props.dispatch(selectNextMediaItem());
          this._mediaItemChanger();
        }
      }, this.props.changeMediaItemSeconds * 1000);
    }
  }

  componentDidUpdate() {
    if (this.props.casting) {
      const message = (this.props.changeMediaItemSeconds)?
                      ` with slideshow of ${this.props.changeMediaItemSeconds} seconds` :
                      '';

      this.props.dispatch(notify(`Casting began ${message}`));
      this._mediaItemChanger();
    }
  }

  render() {
    const iconType = (this.props.casting)? 'cast_connected' : 'cast';
    const style = {
      position: 'fixed',
      bottom: 32,
      right: 32
    };

    return (
      <FloatingActionButton onTouchTap={this._handleClick} style={style}>
        <FontIcon className="material-icons">{iconType}</FontIcon>
      </FloatingActionButton>
    );
  }
}
