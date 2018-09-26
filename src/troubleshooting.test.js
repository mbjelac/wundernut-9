import { generateRow } from "./row-generator/row-generator";

/*
 * Normally, this test should be ignored.
 * Use for manual troubleshooting or printing out generated patterns.
 */
xtest('shoot trouble', () => {

  writePattern('..#.##..##....##..##.#...#..###..#.#.#...#.###.......###########......#############');

});

function writePattern(seed) {

  const rows = [seed];

  for (let i = 0; i < 100; i++) {
    rows.push(generateRow(rows[rows.length - 1]));
  }

  console.log(rows.join('\n'));

}