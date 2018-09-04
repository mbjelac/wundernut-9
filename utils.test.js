import { getLastElement } from "./utils";

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