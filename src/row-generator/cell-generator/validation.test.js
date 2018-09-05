import { generateCell } from "./cell-generator";

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
