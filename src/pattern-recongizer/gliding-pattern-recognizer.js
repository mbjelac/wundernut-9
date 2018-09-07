import { loopUntilTrue } from "../utils/utils";
import { EMPTY } from "../cell-values";

export function recognizeGlidingPattern(pattern) {
  return loopUntilTrue(
    pattern,
    line => isGliding(pattern, line))
}

function isGliding(pattern, line) {

  return loopUntilTrue(
    [moveLineLeft, moveLineRight],
    moveCommand => patternContainsLine(pattern, moveCommand(line)));
}

export function moveLineLeft(line){
  return (line + EMPTY).substr(1);
}

export function moveLineRight(line){
  return (EMPTY + line).substr(0, line.length);
}

export function patternContainsLine(pattern, line){
  throw Error('TODO!');
}

