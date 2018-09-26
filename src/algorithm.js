import { OTHER } from "./pattern-recognizer/pattern-types";
import { getLastElement } from "./utils/utils";
import { generateRow } from "./row-generator/row-generator";
import { recognizePattern } from "./pattern-recognizer/pattern-recognizer";

export function generateAndRecognize(seed, maxSize) {

  let patternType = OTHER;

  const pattern = [seed];

  while (patternType === OTHER && pattern.length < maxSize) {

    const lastRow = getLastElement(pattern);
    pattern.push(generateRow(lastRow));

    patternType = recognizePattern(pattern);
  }

  return patternType;
}
