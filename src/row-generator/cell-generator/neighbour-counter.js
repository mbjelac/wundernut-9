import { FULL } from "../../cell-values";

export function countNeighbours(row, index) {

  let count = 0;

  for (let i = index - 2; i <= index + 2; i++) {
    if (i >= 0 && i < row.length && i !== index && row[i] === FULL) {
      count++;
    }
  }

  return count;
}
