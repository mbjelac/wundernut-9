import { loadPatternSeeds } from "./seed-loader/seed-loader";
import { generateAndRecognize, recognizePatternTypes } from "./algorithm";

const MAX_PATTERN_SIZE = 100;
const PATTERN_SEEDS_PATH = 'patterns.txt';

function outputPatternTypes(patternTypes) {

  process.stdout.write(patternTypes.join('\n') + '\n\n');
}

const patternSeeds = loadPatternSeeds(PATTERN_SEEDS_PATH);

const patternTypes =
  patternSeeds
    .map(seed =>
      generateAndRecognize(seed, MAX_PATTERN_SIZE));

outputPatternTypes(patternTypes);
