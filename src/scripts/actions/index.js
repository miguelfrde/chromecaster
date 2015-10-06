export const OPEN_SETTINGS_DIALOG = 'OPEN_SETTINGS_DIALOG';
export const CLOSE_SETTINGS_DIALOG = 'CLOSE_SETTINGS_DIALOG';
export const SET_CHANGE_MEDIA_ITEM_WHEN_CASTING = 'SET_CHANGE_MEDIA_ITEM_WHEN_CASTING';
export const UPDATE_AVAILABLE_CHROMECASTS = 'UPDATE_AVAILABLE_CHROMECASTS';

export const TOGGLE_CASTING = 'TOGGLE_CASTING';

export const UPDATE_MEDIA_PATH = 'UPDATE_MEDIA_PATH';
export const UPDATE_MEDIA_TYPE = 'UPDATE_MEDIA_TYPE';
export const SELECT_MEDIA_ITEM = 'SELECT_MEDIA_ITEM';
export const SELECT_NEXT_MEDIA_ITEM = 'SELECT_NEXT_MEDIA_ITEM';
export const SELECT_PREVIOUS_MEDIA_ITEM = 'SELECT_PREVIOUS_MEDIA_ITEM';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export function openSettingsDialog() {
  return {
    type: OPEN_SETTINGS_DIALOG
  };
}

export function closeSettingsDialog() {
  return {
    type: CLOSE_SETTINGS_DIALOG
  };
}

export function setChangeMediaItemWhenCasting(seconds) {
  return {
    type: SET_CHANGE_MEDIA_ITEM_WHEN_CASTING,
    seconds: seconds
  };
}

export function updateAvailableChromecasts(chromecasts) {
  return {
    type: UPDATE_AVAILABLE_CHROMECASTS,
    chromecasts: chromecasts
  };
}

export function toggleCasting() {
  return {
    type: TOGGLE_CASTING
  };
}

export function updateMediaPath(path) {
  return {
    type: UPDATE_MEDIA_PATH,
    path: path
  };
}

export function updateMediaType(mediaType) {
  return {
    type: UPDATE_MEDIA_TYPE,
    mediaType: mediaType
  };
}

export function selectMediaItem(index) {
  return {
    type: SELECT_MEDIA_ITEM,
    index: index
  };
}

export function selectNextMediaItem() {
  return {
    type: SELECT_NEXT_MEDIA_ITEM
  };
}

export function selectPreviousMediaItem() {
  return {
    type: SELECT_PREVIOUS_MEDIA_ITEM
  };
}

export function notify(message) {
  return {
    type: SHOW_NOTIFICATION,
    message: message
  };
}

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION
  };
}
