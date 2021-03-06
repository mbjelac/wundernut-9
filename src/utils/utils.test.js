import { getLastElement, loopUntilTrue, arrayContains } from "./utils";

describe('get last element', () => {

  test('throws when arguments invalid', () => {

    expect(() => getLastElement()).toThrow();
    expect(() => getLastElement(undefined)).toThrow();
    expect(() => getLastElement(null)).toThrow();
    expect(() => getLastElement('foo')).toThrow();
    expect(() => getLastElement(true)).toThrow();
    expect(() => getLastElement(123)).toThrow();
    expect(() => getLastElement(123.456)).toThrow();
    expect(() => getLastElement({ x: 'y' })).toThrow();
    expect(() => getLastElement([])).toThrow();
  });

  test('does not modify array', () => {

    const array = [1, 2, 3, 4, 5];

    getLastElement(array);
    getLastElement(array);
    getLastElement(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns last element of array', () => {

    expect(getLastElement([1])).toEqual(1);
    expect(getLastElement(['foo'])).toEqual('foo');
    expect(getLastElement([1, 2])).toEqual(2);
    expect(getLastElement(['foo', 'bar'])).toEqual('bar');
    expect(getLastElement(['foo', 'bar', 3])).toEqual(3);
    expect(getLastElement([undefined, null, 3])).toEqual(3);
    expect(getLastElement([undefined, null])).toEqual(null);
    expect(getLastElement([null, undefined])).toEqual(undefined);
    expect(getLastElement([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(8);
  });
});

describe('loop until true', () => {

  test('returns false if all false', () => {

    expect(loopUntilTrue([1, 2, 3, 4, 5, 6, 7, 8, 9], () => false)).toBeFalsy();
  });

  test('returns false if 0 loops, even if tester returns true', () => {

    expect(loopUntilTrue([], () => true)).toBeFalsy();
  });

  test('returns true if at least one true', () => {

    function example(...flags) {
      expect(loopUntilTrue(flags, flag => flag)).toBeTruthy();
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
        flags,
        flag => {
          count++;
          return flag;
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

test('array contains', () => {

  function example(pattern, line){
    return expectedValue => expect(arrayContains(pattern, line)).toEqual(expectedValue);
  }

  example([], 'foo')(false);
  example(['foo', 'bar'], 'bar')(true);
  example(['foo', 'bar'], 'pop')(false);
  example(['foo', 1, 'bar', 2], 1)(true);
  example(['foo', undefined, 'bar'], undefined)(true);
  example([1, 1, 1, 1, 1], 1)(true);
});