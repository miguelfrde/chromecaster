import path from 'path';
import { getUserHome } from './utils';

module.exports = Object.freeze({
  DEFAULT_PHOTOS_PATH: path.join(getUserHome(), 'Pictures'),
  DEFAULT_VIDEOS_PATH: path.join(getUserHome(), 'Movies'),
  PHOTOS_EXTENSIONS: ['.png', '.jpg', '.jpeg'],
  VIDEOS_EXTENSIONS: ['.mp4', '.avi', '.mkv'],
  AUTO_CHANGE_TIMES: [5, 10, 15, 20, 30, 45, 60]
});
