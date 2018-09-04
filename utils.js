export function getLastElement(array) {

  if (!array.length) {
    throw Error('Array is empty!');
  }

  return array.slice(-1).pop();
}