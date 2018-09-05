import { OTHER, VANISHING } from "./pattern-types";
import { recognizeVanishingPattern } from "./vanishing-pattern-recognizer";


export function recognizePattern(pattern) {

  return selectRecognizedPattern([
    { type: VANISHING, recognized: recognizeVanishingPattern(pattern) }
  ]);
}

export function selectRecognizedPattern(patternMatches) {

  const recognizedPattern = patternMatches.find(pattern => pattern.recognized);

  return recognizedPattern !== undefined ? recognizedPattern.type : OTHER;
}

