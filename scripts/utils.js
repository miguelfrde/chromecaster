import fs from 'fs';
import path from 'path';

export function filesInDirByExtensions(dirPath, extensions) {
  return new Promise((resolve, reject) => {
    const set = new Set(extensions);
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files.filter(file => set.has(path.extname(file))));
        }
    });
  });
}

export function getUserHome() {
  return process.env.HOME;
}
