import { loopUntilTrue } from "../utils/utils";
import { moveLineLeft, moveLineRight } from "./line-mover";

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

export function patternContainsLine(pattern, line){
  throw Error('TODO!');
}

