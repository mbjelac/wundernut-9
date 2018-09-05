import { countNeighbours } from "./neighbour-counter";

const FULL = '#';
const EMPTY = '.';


export function generateCell(row, index) {

  validate(row, index);

  const neighbours = countNeighbours(row, index, FULL);

  const result = shouldFill(row[index] === FULL, neighbours);

  return result ? FULL : EMPTY;
}

function validate(row, index) {

  if (row === undefined || index === undefined || row === '' || index < 0 || index >= row.length) {
    throw Error('Invalid arguments: row=' + row + ', index=' + index);
  }
}


export function shouldFill(isCellAboveFilled, neighbours) {

  return (
    !isCellAboveFilled && (neighbours === 2 || neighbours === 3)
  ) || (
    isCellAboveFilled && (neighbours === 2 || neighbours === 4)
  );
}
