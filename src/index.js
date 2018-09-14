import { generateRows } from "./row-generator/row-generator";
import { recognizePattern } from "./pattern-recognizer/pattern-recognizer";
import { loadPatternSeeds } from "./seed-loader/seed-loader";

const NUMBER_OF_ROWS = 100;
const PATTERN_SEEDS_PATH = 'patterns.txt';

function recognizePatternTypes(patternSeeds) {

  return patternSeeds.map(seed => {
    const pattern = generateRows(seed, NUMBER_OF_ROWS);
    return recognizePattern(pattern);
  });
}

function outputPatternTypes(patternTypes) {

  process.stdout.write(patternTypes.join('\n') + '\n\n');
}

const patternSeeds = loadPatternSeeds(PATTERN_SEEDS_PATH);

const patternTypes = recognizePatternTypes(patternSeeds);

outputPatternTypes(patternTypes);
