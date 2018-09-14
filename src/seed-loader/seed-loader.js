import {fs} from 'file-system';

export function loadPatternSeeds(path) {

  return fs.readFileSync(path, 'utf8').split('\n');
}
