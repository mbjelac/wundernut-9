export function getLastRow(rows) {

  if (!Array.isArray(rows)) {
    throw Error('Not an array: ' + rows);
  }

  const length = rows.length;

  if (length <= 0) {
    throw Error('Array is empty!');
  }

  return rows[length - 1];
}