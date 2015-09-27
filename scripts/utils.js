import fs from 'fs';
import path from 'path';

export function filesInDirByExtensions(dirPath, extensions) {
  const set = new Set(extensions);
  const files = fs.readdirSync(dirPath);
  return files.filter(file => set.has(path.extname(file).toLowerCase()));
}

export function getUserHome() {
  return process.env.HOME;
}
