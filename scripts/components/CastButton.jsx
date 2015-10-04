import React from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon, Styles } from 'material-ui'

import { toggleCasting, selectNextMediaItem } from '../actions';
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
    this.props.dispatch(toggleCasting());
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

  render() {
    const iconType = (this.props.casting)? 'cast_connected' : 'cast';
    const style = {
      position: 'fixed',
      bottom: 32,
      right: 32
    };

    this._mediaItemChanger();

    return (
      <FloatingActionButton onTouchTap={this._handleClick} style={style}>
        <FontIcon className="material-icons">{iconType}</FontIcon>
      </FloatingActionButton>
    );
  }
}
