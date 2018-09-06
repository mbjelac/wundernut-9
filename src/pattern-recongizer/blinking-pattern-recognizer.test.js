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

  test('when all false, go through all loops', () => {

    let count = 0;

    loopUntilTrue(
      5,
      () => {
        count++;
        return false;
      });

    expect(count).toEqual(5);
  });

  test('return on first true', () => {

    let count = 0;

    loopUntilTrue(
      5,
      index => {
        count++;
        return index >= 2;
      });

    expect(count).toEqual(3);
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
  example('101')(true);
  example('10000001')(true);
  example('000000100001')(true);
  example('000000100001')(true);
  example('11111100001')(true);
  example('100011111111')(true);
  example('100010101011')(true);
});