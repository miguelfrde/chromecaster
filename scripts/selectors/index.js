import path from 'path';
import { createSelector } from 'reselect';

export const settingsSelector = state => {
  return {
    settingsDialogVisible: state.settingsReducer.dialogOpen,
    changeMediaItemSeconds: state.settingsReducer.changeMediaItemSeconds
  };
};

export const castingSelector = state => {
  return {
    casting: state.castingReducer.casting,
    changeMediaItemSeconds: state.settingsReducer.changeMediaItemSeconds
  };
}

const currentMediaType = state => state.mediaReducer.mediaType;
const currentMediaItems = state => state.mediaReducer.media[state.mediaReducer.mediaType].items;
const currentMediaPath = state => state.mediaReducer.media[state.mediaReducer.mediaType].path;
const currentIndex = state => state.mediaReducer.media[state.mediaReducer.mediaType].selectedIndex;

export const currentMediaSelector = createSelector(
  currentMediaType,
  currentMediaItems,
  currentMediaPath,
  currentIndex,
  (type, items, mediaPath, index) => {
    const media = {
      mediaType: type,
      mediaFiles: items.map(item => path.join(mediaPath, item)),
      mediaPath: mediaPath,
      mediaFileIndex: index,
      selectedMediaFile: items[index]
    };
    return media;
  }
);
