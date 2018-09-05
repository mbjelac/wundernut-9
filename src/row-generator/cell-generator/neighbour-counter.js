export function countNeighbours(row, index, fullValue) {

  let count = 0;

  for (let i = index - 2; i <= index + 2; i++) {
    if (i >= 0 && i < row.length && i !== index && row[i] === fullValue) {
      count++;
    }
  }

  return count;
}
