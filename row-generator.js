import { getLastElement } from "./utils";
import { generateCell } from "./cell-generator";

export function generateRows(row, numberOfRows) {

  const generatedRows = [row];

  for (let i = 0; i < numberOfRows; i++) {

    const lastRow = getLastElement(generatedRows);

    generatedRows.push(generateRow(lastRow));
  }

  return generatedRows;
}

function generateRow(lastRow) {

  let nextRow = '';

  for (let i = 0; i < lastRow.length; i++) {

    nextRow += generateCell(lastRow, i);
  }

  return nextRow;
}
