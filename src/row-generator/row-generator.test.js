import { generateRow } from "./row-generator";

test('generates rows according to the two rules', () => {

  function example(row, expectedNextRow) {

    expect(
      generateRow(row))
      .toEqual(expectedNextRow);
  }

  example(
    '...........',
    '...........');

  example(
    '#..........',
    '...........');

  example(
    '.#.........',
    '...........');

  example(
    '.....#.....',
    '...........');

  example(
    '.##........',
    '#..#.......');

  example(
    '#..#.......',
    '.##........');

  example(
    '...#.###...',
    '....#.###..');

  example(
    '....#.###..',
    '.....#.###.');

  example(
    '.....#.###.',
    '......#.###');

  example(
    '......#.###',
    '.......#.##');

  example(
    '.......#.##',
    '........##.');

  example(
    '...###.#...',
    '..###.#....');

  example(
    '..###.#....',
    '.###.#.....');

  example(
    '.###.#.....',
    '###.#......');

  example(
    '###.#......',
    '##.#.......');

  example(
    '##.#.......',
    '.##........');
});


