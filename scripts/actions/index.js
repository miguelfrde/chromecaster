export const OPEN_SETTINGS_DIALOG = 'OPEN_SETTINGS_DIALOG';
export const CLOSE_SETTINGS_DIALOG = 'CLOSE_SETTINGS_DIALOG';

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
