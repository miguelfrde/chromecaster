import { combineReducers } from 'redux';

import settings from '../settings';

import {
  OPEN_SETTINGS_DIALOG,
  CLOSE_SETTINGS_DIALOG,
  UPDATE_PHOTOS_PATH,
  UPDATE_VIDEOS_PATH
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

function photosPath(state = settings.DEFAULT_PHOTOS_PATH, action) {
  if (action.type === UPDATE_PHOTOS_PATH) {
    return action.path;
  }
  return state;
}

function videosPath(state = settings.DEFAULT_VIDEOS_PATH, action) {
  if (action.type === UPDATE_VIDEOS_PATH) {
    return action.path;
  }
  return state;
}

const chromecastReducer = combineReducers({
  settingsDialogVisible,
  photosPath,
  videosPath
});

export default chromecastReducer;
