import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import settings from '../settings';
import { filesInPath } from '../utils';

import {
  OPEN_SETTINGS_DIALOG,
  CLOSE_SETTINGS_DIALOG,
  UPDATE_MEDIA_PATH,
  UPDATE_MEDIA_TYPE,
  SELECT_MEDIA_ITEM,
  SELECT_NEXT_MEDIA_ITEM,
  SELECT_PREVIOUS_MEDIA_ITEM
} from '../actions';


const initialSettingsState = {
  dialogOpen: false
};

const initialMediaState = {
  media: {
    photos: {
      path: settings.DEFAULT_PHOTOS_PATH,
      extensions: settings.PHOTOS_EXTENSIONS,
      items: filesInPath(settings.DEFAULT_PHOTOS_PATH,
                         settings.PHOTOS_EXTENSIONS)
    },
    videos: {
      path: settings.DEFAULT_VIDEOS_PATH,
      extensions: settings.VIDEOS_EXTENSIONS,
      items: filesInPath(settings.DEFAULT_VIDEOS_PATH,
                         settings.VIDEOS_EXTENSIONS)
    },
    nothing: {
      path: '',
      extensions: [],
      items: []
    }
  },
  mediaType: 'nothing',
  selectedIndex: 0
};


function settingsReducer(state = initialSettingsState, action) {
  switch (action.type) {
  case OPEN_SETTINGS_DIALOG:
    return Object.assign({}, state, {
      dialogOpen: true
    });
  case CLOSE_SETTINGS_DIALOG:
    return Object.assign({}, state, {
      dialogOpen: false
    });
  default:
    return state;
  }
}


function mediaReducer(state = initialMediaState, action) {
  const currentMedia = state.mediaType;
  const currentItems = state.media[currentMedia].items.length;
  const currentIndex = state.selectedIndex;

  switch (action.type) {
  case UPDATE_MEDIA_PATH:
    return Object.assign({}, state, {
      media: Object.assign({}, state.media, {
        [currentMedia]: Object.assign({}, state.media[currentMedia], {
          path: action.path,
          items: filesInPath(action.path, state.media[currentMedia].extensions)
        })
      })
    });
  case UPDATE_MEDIA_TYPE:
    return Object.assign({}, state, {
      mediaType: action.mediaType
    });
  case SELECT_MEDIA_ITEM:
    return Object.assign({}, state, {
      selectedIndex: action.index % currentItems
    });
  case SELECT_NEXT_MEDIA_ITEM:
    return Object.assign({}, state, {
      selectedIndex: (currentIndex + 1) % currentItems
    });
  case SELECT_PREVIOUS_MEDIA_ITEM:
    const index = (((currentIndex - 1) % currentItems) + currentItems) % currentItems;
    return Object.assign({}, state, {
      selectedIndex: index
    });
  default:
    return state;
  }
}


const chromecastReducer = combineReducers({
  settingsReducer,
  mediaReducer
});

export default chromecastReducer;
