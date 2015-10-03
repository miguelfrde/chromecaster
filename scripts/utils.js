import fs from 'fs';
import path from 'path';

export function filesInPath(directory, extensions=[]) {
  const set = new Set(extensions);
  const files = fs.readdirSync(directory);
  if (set.length == 0) {
    return files;
  }
  return files.filter(file => set.has(path.extname(file).toLowerCase()));
}

export function getUserHome() {
  return process.env.HOME;
}
