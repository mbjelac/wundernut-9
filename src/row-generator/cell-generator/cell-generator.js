import { countNeighbours } from "./neighbour-counter";
import { shouldFill } from "./fill-rules";
import { EMPTY, FULL } from "../../cell-values";

export function generateCell(row, index) {

  validate(row, index);

  const neighbours = countNeighbours(row, index);

  const result = shouldFill(row[index] === FULL, neighbours);

  return result ? FULL : EMPTY;
}

function validate(row, index) {

  if (row === undefined || index === undefined || row === '' || index < 0 || index >= row.length) {
    throw Error('Invalid arguments: row=' + row + ', index=' + index);
  }
}


