import React from 'react';
import { FloatingActionButton, FontIcon, Styles } from 'material-ui'

const ThemeManager = new Styles.ThemeManager();


export default class CastButton extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  state = { iconType: 'cast' }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleClick() {
    let prev = this.state.iconType;
    this.setState({iconType: (prev === 'cast')? 'cast_connected' : 'cast'});
  }

  render() {
    const style = {
      position: 'fixed',
      bottom: 32,
      right: 32
    };
    return (
      <FloatingActionButton onTouchTap={this._handleClick} style={style}>
        <FontIcon className="material-icons">{this.state.iconType}</FontIcon>
      </FloatingActionButton>
    );
  }
}
