import { getLastElement } from "./utils";

export function generateRows(row, numberOfRows) {

  const generatedRows = [row];

  for (let i = 0; i < numberOfRows; i++) {

    const lastRow = getLastElement(generatedRows);

    generatedRows.push(generateRow(lastRow));
  }

  return generatedRows;
}

function generateRow(lastRow) {

  throw Error('TODO!');
}
