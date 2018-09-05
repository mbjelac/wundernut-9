import { countNeighbours } from "./neighbour-counter";

test('no neighbours', () => {
  countShouldBe('......', 0)(0);
  countShouldBe('......', 1)(0);
  countShouldBe('......', 2)(0);
  countShouldBe('......', 3)(0);
  countShouldBe('......', 4)(0);
  countShouldBe('......', 5)(0);
});

test('one neighbour', () => {
  countShouldBe('...#...', 0)(0);
  countShouldBe('...#...', 1)(1);
  countShouldBe('...#...', 2)(1);
  countShouldBe('...#...', 3)(0);
  countShouldBe('...#...', 4)(1);
  countShouldBe('...#...', 5)(1);
  countShouldBe('...#...', 6)(0);
});

test('two neighbours', () => {
  countShouldBe('...##..', 0)(0);
  countShouldBe('...##..', 1)(1);
  countShouldBe('...##..', 2)(2);
  countShouldBe('...##..', 3)(1);
  countShouldBe('...##..', 4)(1);
  countShouldBe('...##..', 5)(2);
  countShouldBe('...##..', 6)(1);
});

test('two separated neighbours', () => {
  countShouldBe('..#..#.', 0)(1);
  countShouldBe('..#..#.', 1)(1);
  countShouldBe('..#..#.', 2)(0);
  countShouldBe('..#..#.', 3)(2);
  countShouldBe('..#..#.', 4)(2);
  countShouldBe('..#..#.', 5)(0);
  countShouldBe('..#..#.', 6)(1);
});

test('three neighbours', () => {
  countShouldBe('..###..', 0)(1);
  countShouldBe('..###..', 1)(2);
  countShouldBe('..###..', 2)(2);
  countShouldBe('..###..', 3)(2);
  countShouldBe('..###..', 4)(2);
  countShouldBe('..###..', 5)(2);
  countShouldBe('..###..', 6)(1);
});

test('crowded', () => {
  countShouldBe('#######', 0)(2);
  countShouldBe('#######', 1)(3);
  countShouldBe('#######', 2)(4);
  countShouldBe('#######', 3)(4);
  countShouldBe('#######', 4)(4);
  countShouldBe('#######', 5)(3);
  countShouldBe('#######', 6)(2);
});

test('small row', () => {
  countShouldBe('###', 0)(2);
  countShouldBe('###', 1)(2);
  countShouldBe('###', 2)(2);

  countShouldBe('#.#', 0)(1);
  countShouldBe('#.#', 1)(2);
  countShouldBe('#.#', 2)(1);

  countShouldBe('.##', 0)(2);
  countShouldBe('.##', 1)(1);
  countShouldBe('.##', 2)(1);

  countShouldBe('##.', 0)(1);
  countShouldBe('##.', 1)(1);
  countShouldBe('##.', 2)(2);
});

function countShouldBe(row, index) {
  return expectedCount => expect(countNeighbours(row, index)).toEqual(expectedCount);
}