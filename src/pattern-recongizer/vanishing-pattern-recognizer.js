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
