export const OPEN_SETTINGS_DIALOG = 'OPEN_SETTINGS_DIALOG';
export const CLOSE_SETTINGS_DIALOG = 'CLOSE_SETTINGS_DIALOG';
export const UPDATE_PHOTOS_PATH = 'UPDATE_PHOTOS_PATH';
export const UPDATE_VIDEOS_PATH = 'UPDATE_VIDEOS_PATH';

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

export function updatePhotosPath(path) {
  return {
    type: UPDATE_PHOTOS_PATH,
    path: path
  };
}

export function updateVideosPath(path) {
  return {
    type: UPDATE_VIDEOS_PATH,
    path: path
  };
}
