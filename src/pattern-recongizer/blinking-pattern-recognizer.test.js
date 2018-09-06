import { flattenToBinary, isBlinking, loopUntilTrue } from "./blinking-pattern-recognizer";

describe('looper', () => {

  test('returns false if all false', () => {

    expect(loopUntilTrue(10, () => false)).toBeFalsy();
  });

  test('returns false if 0 loops, even if tester returns true', () => {

    expect(loopUntilTrue(0, () => true)).toBeFalsy();
  });

  test('returns true if at least one true', () => {

    function example(...flags) {
      expect(loopUntilTrue(flags.length, index => flags[index])).toBeTruthy();
    }

    example(true);
    example(false, true);
    example(false, true, false);
    example(false, false, true);
    example(false, false, false, true);
  });

  test('return on first true', () => {

    function example(...flags) {

      let count = 0;

      loopUntilTrue(
        flags.length,
        index => {
          count++;
          return flags[index];
        });

      return expectedCount => expect(count).toEqual(expectedCount);
    }

    example()(0);
    example(true)(1);
    example(false)(1);
    example(false, false, false)(3);
    example(false, false, true)(3);
    example(false, true, true)(2);
    example(true, true, true)(1);
  });

});

test('flatten to binary', () => {

  function example(pattern, line) {
    return expectedResult => expect(flattenToBinary(pattern, line)).toEqual(expectedResult);
  }

  example([], 'foo')('');
  example(['bar'], 'foo')('0');
  example(['bar'], 'bar')('1');
  example(['bar'], 'Bar')('0');
  example(['pop', 'oof', 'bar'], 'foo')('000');
  example(['pop', 'oof', 'bar'], 'oof')('010');
  example(['pop', 'pop', 'pop', 'pop'], 'pop')('1111');
  example(['pop', 'foo', 'pop', 'pop'], 'pop')('1011');
});

test('is blinking', () => {

  function example(binaryPattern) {
    return expectedResult => expect(isBlinking(binaryPattern)).toEqual(expectedResult);
  }

  example('0000')(false);
  example('1000')(false);
  example('1111')(false);
  example('111000')(false);
  example('00001111')(false);
  example('010')(false);
  example('000011110000')(false);

  example('101')(true);
  example('0101')(true);
  example('10000001')(true);
  example('000000100001')(true);
  example('11111011111')(true);
  example('11111100001')(true);
  example('100011111111')(true);
  example('10101010101')(true);
});