import { countNeighbours, generateCell, shouldFill } from "./cell-generator";


describe('validation', () => {

  test('throws on invalid values', () => {

    shouldThrow(undefined, 0);
    shouldThrow('foo', undefined);
    shouldThrow('foo', -1);
    shouldThrow('', 0);
    shouldThrow('foo', 3);
    shouldThrow('foobar', 6);
  });

  function shouldThrow(...args) {
    expect(() => generateCell(...args)).toThrow();
  }
});

describe('neighbour counter', () => {

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
});

describe('rules', () => {

  test('rule 1', () => {
    ruleReturns(false, 0)(false);
    ruleReturns(false, 1)(false);
    ruleReturns(false, 2)(true);
    ruleReturns(false, 3)(true);
    ruleReturns(false, 4)(false);
    ruleReturns(false, 5)(false);
    ruleReturns(false, 6)(false);
  });

  test('rule 2', () => {
    ruleReturns(true, 0)(false);
    ruleReturns(true, 1)(false);
    ruleReturns(true, 2)(true);
    ruleReturns(true, 3)(false);
    ruleReturns(true, 4)(true);
    ruleReturns(true, 5)(false);
    ruleReturns(true, 6)(false);
  });

  function ruleReturns(aboveCellFilled, neighbourCount) {
    return expectedResult => expect(shouldFill(aboveCellFilled, neighbourCount)).toEqual(expectedResult);
  }
});