import { generateCell } from "./cell-generator/cell-generator";

export function generateRow(lastRow) {

  let nextRow = '';

  for (let i = 0; i < lastRow.length; i++) {

    nextRow += generateCell(lastRow, i);
  }

  return nextRow;
}
