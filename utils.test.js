import { getLastRow } from "./utils";

describe('get last row', () => {

  test('thorns', () => {

    expect(() => getLastRow()).toThrow();
    expect(() => getLastRow(undefined)).toThrow();
    expect(() => getLastRow(null)).toThrow();
    expect(() => getLastRow('foo')).toThrow();
    expect(() => getLastRow(true)).toThrow();
    expect(() => getLastRow(123)).toThrow();
    expect(() => getLastRow(123.456)).toThrow();
    expect(() => getLastRow({ x: 'y' })).toThrow();
    expect(() => getLastRow([])).toThrow();
  });

  test('gold', () => {

    expect(getLastRow([1])).toEqual(1);
    expect(getLastRow(['foo'])).toEqual('foo');
    expect(getLastRow([1, 2])).toEqual(2);
    expect(getLastRow(['foo', 'bar'])).toEqual('bar');
    expect(getLastRow(['foo', 'bar', 3])).toEqual(3);
    expect(getLastRow([undefined, null, 3])).toEqual(3);
    expect(getLastRow([undefined, null])).toEqual(null);
    expect(getLastRow([null, undefined])).toEqual(undefined);
    expect(getLastRow([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(8);
  });
});