import { VANISHING } from "./pattern-types";


export function recognizePattern(pattern) {

  return selectRecognizedPattern([
    { type: VANISHING, recognized: recognizeVanishingPattern(pattern) }
  ]);
}

export function selectRecognizedPattern(patternMatches) {
  return undefined;
}

function recognizeVanishingPattern(pattern) {

}
