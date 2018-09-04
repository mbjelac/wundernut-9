
test('rule 1: if square above is blank, fill square only if 2 or 3 neighbours are filled', () => {

  willNotFillSquare('...#.###.....', 2);
  willFillSquare('...#.###.....', 4);
  willFillSquare('...#.###.....', 8);
});

test('rule 2: if square above is filled, fill square only if 2 or 4 neighbours are filled', () => {

  willNotFillSquare('...#.###.....', 3);
  willNotFillSquare('...#.###.....', 5);
  willFillSquare('...#.###.....', 6);
  willFillSquare('...#.###.....', 7);
});

function willNotFillSquare(cellsAbove, squareIndex) {

  fillSquareWillReturn(cellsAbove, squareIndex)(false);
}

function willFillSquare(cellsAbove, squareIndex) {

  fillSquareWillReturn(cellsAbove, squareIndex)(true);
}

function fillSquareWillReturn(cellsAbove, squareIndex) {

  return (expectedReturnValue) => expect(fillSquare(cellsAbove, squareIndex)).toEqual(expectedReturnValue);
}
