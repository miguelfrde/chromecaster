import { combineReducers } from 'redux';

import {
  OPEN_SETTINGS_DIALOG,
  CLOSE_SETTINGS_DIALOG
} from '../actions';

function settingsDialogVisible(state = false, action) {
  switch (action.type) {
  case OPEN_SETTINGS_DIALOG:
    return true;
  case CLOSE_SETTINGS_DIALOG:
    return false;
  default:
    return state;
  }
}

const chromecastReducer = combineReducers({
  settingsDialogVisible
});

export default chromecastReducer;
