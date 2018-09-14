import { BLINKING, GLIDING, OTHER, VANISHING } from "./pattern-types";
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

test('other', () => {

  function example(pattern) {
    shouldBeRecognizedAs(pattern)(OTHER);
  }

  example([]);

  example([
    '#'
  ]);

  example([
    '#',
    '#',
    '#',
    '#',
  ]);

  example([
    '#######',
    '#######',
    '#######',
    '#######',
  ]);

  example([
    '#######',
    '.#####.',
    '..###..',
    '...#...',
  ]);

  example([
    '#.....#',
    '#.....#',
    '#.....#',
    '#.....#',
  ]);

  example([
    '#......',
    '#......',
    '#####..',
    '#....##',
    '#######',
  ]);

  example([
    '.#####.',
    '#.....#',
    '######.',
    '#......',
    '.####..',
  ]);

  example([
    '.#####.',
    '#.....#',
    '#.....#',
    '#.....#',
    '#.....#',
  ]);

});

test('blinking', () => {

  function example(pattern) {
    shouldBeRecognizedAs(pattern)(BLINKING);
  }

  example([
    '#######',
    '...#...',
    '#######',
    '...#...',
    '#######',
    '...#...',
  ]);

  example([
    '##',
    '.#',
    '##',
    '#.',
    '##',
  ]);

  example([
    '##',
    '##',
    '#.',
    '##',
  ]);

  example([
    '#######',
    '....##.',
    '...#...',
    '.##....',
    '#######',
  ]);

  example([
    '.#####.',
    '#.....#',
    '#.....#',
    '#.....#',
    '.#####.',
  ]);

  example([
    '.#####.',
    '#.....#',
    '#.....#',
    '#######',
    '#.....#',
  ]);

});

test('gliding', () => {

  function example(pattern) {
    shouldBeRecognizedAs(pattern)(GLIDING);
  }

  example([
    '#.',
    '.#',
  ]);

  example([
    '##.....',
    '.##....',
    '..##...',
    '...##..',
    '....##.',
    '.....##',
  ]);

  example([
    '.....##',
    '....##.',
    '...##..',
    '..##...',
    '.##....',
    '##.....',
  ]);

  example([
    '..##.##',
    '...##..',
    '...##..',
    '.##.##.',
    '###....',
    '###....',
  ]);

  example([
    '..##.##',
    '..##.##',
    '..##.##',
    '.##.##.',
  ]);
});

function shouldBeRecognizedAs(pattern) {

  return expectedResult => expect(recognizePattern(pattern)).toEqual(expectedResult);
}
