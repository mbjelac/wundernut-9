test('returns next row according to the two rules', () => {

  expectNextRow(
    '...........',
    '...........');

  expectNextRow(
    '#..........',
    '...........');

  expectNextRow(
    '.#.........',
    '...........');

  expectNextRow(
    '.....#.....',
    '...........');

  expectNextRow(
    '.##........',
    '#..#.......');

  expectNextRow(
    '...#.###...',
    '....#.###..');

  expectNextRow(
    '....#.###..',
    '.....#.###.',
  );


});

function expectNextRow(row, expectedNextRow) {

  expect(
    getNextRow(row))
    .toEqual(expectedNextRow);
}
