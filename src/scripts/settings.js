import path from 'path';
import { getUserHome } from './utils';

const PHOTOS_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const VIDEOS_EXTENSIONS = ['.mp4', '.avi', '.mkv'];

module.exports = Object.freeze({
  DEFAULT_PHOTOS_PATH: path.join(getUserHome(), 'Pictures'),
  DEFAULT_VIDEOS_PATH: path.join(getUserHome(), 'Movies'),
  PHOTOS_EXTENSIONS: PHOTOS_EXTENSIONS,
  VIDEOS_EXTENSIONS: VIDEOS_EXTENSIONS,
  AUTO_CHANGE_TIMES: [5, 10, 15, 20, 30, 45, 60],
  VALID_EXTENSIONS: PHOTOS_EXTENSIONS.concat(VIDEOS_EXTENSIONS)
});
