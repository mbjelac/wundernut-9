import { BLINKING, GLIDING, OTHER, VANISHING } from "./pattern-types";
import { recognizeVanishingPattern } from "./vanishing/vanishing-pattern-recognizer";
import { recognizeBlinkingPattern } from "./blinking/blinking-pattern-recognizer";
import { recognizeGlidingPattern } from "./gliding/gliding-pattern-recognizer";


export function recognizePattern(pattern) {

  return selectRecognizedPattern([
    { type: VANISHING, recognized: recognizeVanishingPattern(pattern) },
    { type: BLINKING, recognized: recognizeBlinkingPattern(pattern) },
    { type: GLIDING, recognized: recognizeGlidingPattern(pattern) },
  ]);
}

export function selectRecognizedPattern(patternMatches) {

  const recognizedPattern = patternMatches.find(pattern => pattern.recognized);

  return recognizedPattern !== undefined ? recognizedPattern.type : OTHER;
}

