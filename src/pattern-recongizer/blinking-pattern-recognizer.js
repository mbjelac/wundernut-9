export function recognizeBlinkingPattern(pattern) {

  return loopUntilTrue(
    pattern.length,
    index => isLineBlinking(pattern, index));
}

export function loopUntilTrue(loops, tester) {

  let index = 0;

  while (loops > 0) {

    if (tester(index)) {
      return true;
    }

    index++;
    loops--;
  }

  return false;
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

