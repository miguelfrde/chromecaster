import path from 'path';
import mime from 'mime';
import chromecasts from 'chromecasts';

import settings from '../settings.js';

const chromecastList = chromecasts();


export default class ChromecastService {
  static availableChromecasts() {
    chromecastList.update();
    return chromecastList.players;
  }

  static cast(player, mediaFile) {
    const extension = path.extname(mediaFile).toLowerCase();
    if (settings.VALID_EXTENSIONS.indexOf(extension) !== -1) {
      player.play(mediaFile, {
        title: path.basename(mediaFile, path.extname(mediaFile)),
        type: mime.lookup(extension)
      });
    }
  }

  static watch(callback) {
    chromecastList.on('update', function () {
      callback(chromecastList.players);
    });
  }
}
