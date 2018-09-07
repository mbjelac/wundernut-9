import { loopUntilTrue } from "../utils/utils";

export function recognizeBlinkingPattern(pattern) {

  return loopUntilTrue(
    pattern.length,
    index => isLineBlinking(pattern, index));
}

function isLineBlinking(pattern, index) {

  const line = pattern[index];

  const binaryPattern = flattenToBinary(pattern, line);

  return isBlinking(binaryPattern);
}

export function flattenToBinary(pattern, line) {

  return pattern
    .map(row => row === line ? '1' : '0')
    .join('');
}

export function isBlinking(binaryPattern) {

  return binaryPattern.match(/(0*1+0+1+)+/) !== null;
}

