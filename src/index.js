import { generateRow } from "./row-generator/row-generator";
import { recognizePattern } from "./pattern-recognizer/pattern-recognizer";
import { loadPatternSeeds } from "./seed-loader/seed-loader";
import { OTHER } from "./pattern-recognizer/pattern-types";
import { getLastElement } from "./utils/utils";

const NUMBER_OF_ROWS = 100;
const PATTERN_SEEDS_PATH = 'patterns.txt';

function recognizePatternTypes(patternSeeds) {

  return patternSeeds.map(seed => {

    let patternType = OTHER;

    const pattern = [seed];

    while (patternType === OTHER && pattern.length < NUMBER_OF_ROWS) {

      const lastRow = getLastElement(pattern);
      pattern.push(generateRow(lastRow));

      patternType = recognizePattern(pattern);
    }

    return patternType;
  });
}

function outputPatternTypes(patternTypes) {

  process.stdout.write(patternTypes.join('\n') + '\n\n');
}

const patternSeeds = loadPatternSeeds(PATTERN_SEEDS_PATH);

const patternTypes = recognizePatternTypes(patternSeeds);

outputPatternTypes(patternTypes);
