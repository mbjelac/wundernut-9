export function getLastElement(array) {

  if (!array.length) {
    throw Error('Array is empty!');
  }

  return array.slice(-1).pop();
}

export function loopUntilTrue(loops, tester) {

  let index = 0;

  while (loops > 0) {

    if (tester(index)) {
      return true;
    }

    index++;
    loops--;
  }

  return false;
}