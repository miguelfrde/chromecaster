import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import settings from '../settings';
import { filesInPath } from '../utils';

import {
  OPEN_SETTINGS_DIALOG,
  CLOSE_SETTINGS_DIALOG,
  SET_CHANGE_MEDIA_ITEM_WHEN_CASTING,
  TOGGLE_CASTING,
  UPDATE_MEDIA_PATH,
  UPDATE_MEDIA_TYPE,
  SELECT_MEDIA_ITEM,
  SELECT_NEXT_MEDIA_ITEM,
  SELECT_PREVIOUS_MEDIA_ITEM,
  SHOW_NOTIFICATION
} from '../actions';


const initialSettingsState = {
  dialogOpen: false,
  changeMediaItemSeconds: 0
};

const initialCastingState = {
  casting: false
}

const initialNotificationState = {
  message: '',
  visible: false
}

const initialMediaState = {
  media: {
    photos: {
      path: settings.DEFAULT_PHOTOS_PATH,
      extensions: settings.PHOTOS_EXTENSIONS,
      items: filesInPath(settings.DEFAULT_PHOTOS_PATH,
                         settings.PHOTOS_EXTENSIONS),
      selectedIndex: 0
    },
    videos: {
      path: settings.DEFAULT_VIDEOS_PATH,
      extensions: settings.VIDEOS_EXTENSIONS,
      items: filesInPath(settings.DEFAULT_VIDEOS_PATH,
                         settings.VIDEOS_EXTENSIONS),
      selectedIndex: 0
    },
    nothing: {
      path: '',
      extensions: [],
      items: [],
      selectedIndex: 0
    }
  },
  mediaType: 'nothing'
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
    case SET_CHANGE_MEDIA_ITEM_WHEN_CASTING:
      return Object.assign({}, state, {
        changeMediaItemSeconds: action.seconds
      });
    default:
      return state;
  }
}


function castingReducer(state = initialCastingState, action) {
  switch (action.type) {
    case TOGGLE_CASTING:
      return Object.assign({}, state, {
        casting: !state.casting
      })
    default:
      return state;
  }
}


function notificationReducer(state = initialNotificationState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { message: action.message, visible: true };
    default:
      return Object.assign({}, state, {
        visible: false
      });
  }
}


function mediaReducer(state = initialMediaState, action) {
  const currentMedia = state.mediaType;
  const currentItems = state.media[currentMedia].items.length;
  const currentIndex = state.media[currentMedia].selectedIndex;

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
        media: Object.assign({}, state.media, {
          [currentMedia]: Object.assign({}, state.media[currentMedia], {
            selectedIndex: action.index % currentItems
          })
        })
      });

    case SELECT_NEXT_MEDIA_ITEM:
      return Object.assign({}, state, {
        media: Object.assign({}, state.media, {
          [currentMedia]: Object.assign({}, state.media[currentMedia], {
            selectedIndex: (currentIndex + 1) % currentItems
          })
        })
      });

    case SELECT_PREVIOUS_MEDIA_ITEM:
      const index = (((currentIndex - 1) % currentItems) + currentItems) % currentItems;
      return Object.assign({}, state, {
        media: Object.assign({}, state.media, {
          [currentMedia]: Object.assign({}, state.media[currentMedia], {
            selectedIndex: index
          })
        })
      });
    default:
      return state;
  }
}


const chromecastReducer = combineReducers({
  settingsReducer,
  castingReducer,
  mediaReducer,
  notificationReducer
});

export default chromecastReducer;
