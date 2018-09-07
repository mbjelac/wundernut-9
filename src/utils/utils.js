export function getLastElement(array) {

  if (!array.length) {
    throw Error('Array is empty!');
  }

  return array.slice(-1).pop();
}

export function loopUntilTrue(array, tester) {

  for (let index = 0; index < array.length; index++) {
    if (tester(array[index])) {
      return true;
    }
  }

  return false;
}