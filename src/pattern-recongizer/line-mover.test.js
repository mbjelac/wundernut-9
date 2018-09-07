import { moveLineLeft, moveLineRight } from "./line-mover";

test('move line left', () => {

  function example(line) {
    return expectedResult => expect(moveLineLeft(line)).toEqual(expectedResult);
  }

  example('')('');
  example('#')('.');
  example('.')('.');
  example('##')('#.');
  example('.#')('#.');
  example('#.')('..');
  example('..')('..');
  example('###')('##.');
  example('#.#')('.#.');
  example('..#')('.#.');
  example('#..')('...');
  example('##.')('#..');
  example('.##')('##.');
  example('..##..')('.##...');
  example('#...#')('...#.');
});

test('move line right', () => {

  function example(line) {
    return expectedResult => expect(moveLineRight(line)).toEqual(expectedResult);
  }

  example('')('');
  example('#')('.');
  example('.')('.');
  example('##')('.#');
  example('.#')('..');
  example('#.')('.#');
  example('..')('..');
  example('###')('.##');
  example('#.#')('.#.');
  example('..#')('...');
  example('#..')('.#.');
  example('##.')('.##');
  example('.##')('..#');
  example('..##..')('...##.');
  example('#...#')('.#...');
});

test('moving does not modify the original line', () => {

  let line = '..##..';

  moveLineLeft(line);
  expect(line).toEqual('..##..');

  moveLineRight(line);
  expect(line).toEqual('..##..');
});
