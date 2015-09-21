import { combineReducers } from 'redux';

import TOGGLE_SETTINGS_DIALOG from '../actions';

const initialSettingsState = {
  show: false
};

function toggleSettings(state = initialSettingsState, action) {
  if (action == TOGGLE_SETTINGS_DIALOG) {
    return Object.assign({}, state, { show: !state.show });
  }
  return state;
}

const chromecastReducer = combineReducers({
  toggleSettings
});

export default chromecastReducer;
