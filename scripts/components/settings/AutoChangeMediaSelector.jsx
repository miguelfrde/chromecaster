import React from 'react';
import { connect } from 'react-redux';
import { DropDownMenu, RadioButtonGroup, RadioButton } from 'material-ui';

import { setChangeMediaItemWhenCasting } from '../../actions';
import { settingsSelector } from '../../selectors';
import settings from '../../settings.js';


@connect(settingsSelector)
export default class AutoChangeMediaSelector extends React.Component {
  constructor(props) {
    super(props);
    this._changeOptions = this._changeOptions.bind(this);
    this._handleChangeOption = this._handleChangeOption.bind(this);
    this._handleTimeSelected = this._handleTimeSelected.bind(this);
  }

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    changeMediaItemSeconds: React.PropTypes.number.isRequired
  }

  _changeOptions() {
    const seconds = [for (x of settings.AUTO_CHANGE_TIMES) { payload: x, text: `${x} seconds` }];
    seconds[seconds.length - 1].text = '1 minute';
    return seconds;
  }

  _handleChangeOption(e, selected) {
    if (selected === 'no') {
      this.props.dispatch(setChangeMediaItemWhenCasting(0));
    } else {
      this.props.dispatch(setChangeMediaItemWhenCasting(settings.AUTO_CHANGE_TIMES[2]));
    }
  }

  _handleTimeSelected(e, selectedIndex, menuItem) {
    this.props.dispatch(setChangeMediaItemWhenCasting(menuItem.payload));
  }

  render() {
    const styles = {
      autoChangeRadioBtn: {
        display: 'inline-block',
        float: 'left',
        marginLeft: 20,
        width: 'auto'
      },
      changeSecondsDropdown: {
        marginLeft: 5,
        marginTop: -15,
        transition: 'opacity 0.5s ease',
        opacity: (this.props.changeMediaItemSeconds > 0)? 1.0 : 0
      }
    };

    const autoChangeSeconds = (this.props.changeMediaItemSeconds && 'yes') || 'no';
    const selectedSeconds = this.props.changeMediaItemSeconds || settings.AUTO_CHANGE_TIMES[0];

    return (
      <div>
        <p>Automatically change media items when casting</p>
        <RadioButtonGroup
          name="autoChangeMediaOption"
          defaultSelected={autoChangeSeconds}
          onChange={this._handleChangeOption}
        >
          <RadioButton
            value="yes"
            label="Yes"
            style={styles.autoChangeRadioBtn}/>
          <RadioButton
            value="no"
            label="No"
            style={styles.autoChangeRadioBtn}/>
        </RadioButtonGroup>

        <DropDownMenu
          menuItems={this._changeOptions()}
          style={styles.changeSecondsDropdown}
          selectedIndex={settings.AUTO_CHANGE_TIMES.indexOf(selectedSeconds)}
          onChange={this._handleTimeSelected}/>
      </div>
    );
  }
}
