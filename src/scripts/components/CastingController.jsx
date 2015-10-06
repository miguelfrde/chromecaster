import React from 'react';
import { connect } from 'react-redux';

import ChromecastService from '../services/ChromecastService.js';
import { castingSelector } from '../selectors';


@connect(castingSelector)
export default class CastingController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { casting: false };
  }

  static propTypes = {
    casting: React.PropTypes.bool.isRequired,
    castFile: React.PropTypes.string.isRequired,
    chromecast: React.PropTypes.object.isRequired
  }

  componentWillReceiveProps(newProps) {
    if (this.state.castFile !== newProps.castFile && this.props.casting) {
      this.setState({ castFile: newProps.castFile });
      ChromecastService.cast(this.props.chromecast, newProps.castFile);
    }
  }

  render() {
    return <div style={this.props.style}/>;
  }
}
