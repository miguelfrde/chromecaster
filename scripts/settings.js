import path from 'path';
import { getUserHome } from './utils';

module.exports = Object.freeze({
  DEFAULT_PHOTOS_PATH: path.join(getUserHome(), 'Pictures'),
  DEFAULT_VIDEOS_PATH: path.join(getUserHome(), 'Videos')
});
