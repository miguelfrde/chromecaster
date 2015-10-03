import React from 'react';
import { connect } from 'react-redux';
import { FloatingActionButton, FontIcon, Styles } from 'material-ui'

import { toggleCasting } from '../actions';
import { castingSelector } from '../selectors';


const ThemeManager = new Styles.ThemeManager();

@connect(castingSelector)
export default class CastButton extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  static propTypes = {
    casting: React.PropTypes.bool.isRequired,
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
