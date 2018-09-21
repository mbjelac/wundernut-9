import { generateRow } from "./row-generator/row-generator";

test('shoot trouble', () => {

  const rows = ['#...#...#...#...#...#...#...#...#...#...#....#######.##.##.#.#'];

  for (let i = 0; i < 100; i++) {
    rows.push(generateRow(rows[rows.length - 1]));
  }

  console.log(rows.join('\n'));

});