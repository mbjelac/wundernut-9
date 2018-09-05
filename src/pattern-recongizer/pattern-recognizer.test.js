import { VANISHING } from "./pattern-types";
import { recognizePattern } from "./pattern-recognizer";

test('vanishing', () => {

  function example(pattern) {
    shouldBeRecognizedAs(pattern)(VANISHING);
  }

  example([
    '#######',
    '.#####.',
    '..###..',
    '...#...',
    '.......',
  ]);

  example([
    '.......',
    '.......',
    '.......',
    '.......',
    '.......',
  ]);

  example([
    '...#...',
    '..###..',
    '.#####.',
    '..###..',
    '...#...',
    '.......',
  ]);

  example([
    '#######',
    '#######',
    '#######',
    '#######',
    '.......',
  ]);

  example([
    '#######',
    '#######',
    '#######',
    '.......',
    '#######',
  ]);

  example([
    '#######',
    '#######',
    '.......',
    '#######',
    '#######',
  ]);

  example([
    '#######',
    '.......',
    '#######',
    '#######',
    '#######',
  ]);

  example([
    '.......',
    '#######',
    '#######',
    '#######',
    '#######',
  ]);

  example([
    '#######',
    '.......',
    '.#####.',
    '.......',
    '..###..',
    '.......',
    '...#...',
  ]);
});

function shouldBeRecognizedAs(pattern) {

  return expectedResult => expect(recognizePattern(pattern)).toEqual(expectedResult);
}
