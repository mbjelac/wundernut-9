import { OTHER, VANISHING } from "./pattern-types";


export function recognizePattern(pattern) {

  return selectRecognizedPattern([
    { type: VANISHING, recognized: recognizeVanishingPattern(pattern) }
  ]);
}

export function selectRecognizedPattern(patternMatches) {

  const recognizedPattern = patternMatches.find(pattern => pattern.recognized);

  return recognizedPattern !== undefined ? recognizedPattern.type : OTHER;
}

export function recognizeVanishingPattern(pattern) {
  return pattern
    .filter(isEmpty)
    .length > 0;
}

function isEmpty(row) {

  return row
    .split('')
    .filter(c => c !== '.')
    .length === 0;
}
