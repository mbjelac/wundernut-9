import { generateAndRecognize } from "./algorithm";
import { BLINKING, GLIDING, OTHER, VANISHING } from "./pattern-recognizer/pattern-types";

test('algorithm recognizes patterns from seeds', () => {

  function example(seed) {

    return expectedPatternType => expect(generateAndRecognize(seed, 100)).toEqual(expectedPatternType);
  }

  example('.#.#..#..#...#')(BLINKING);
  example('.#.###......')(GLIDING);
  example('.#...#...#...#.')(VANISHING);
  example('..#.##..##....##..##.#...#..###..#.#.#...#.###.......###########......#############')(OTHER);
});