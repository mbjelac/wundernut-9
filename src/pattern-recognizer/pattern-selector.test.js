import { selectRecognizedPattern } from "./pattern-recognizer";
import { OTHER } from "./pattern-types";

test('select recognized item', () => {

  expect(selectRecognizedPattern([
    { type: 'foo', recognized: false },
    { type: 'bar', recognized: false },
    { type: 'foobar', recognized: false },
    { type: 'barfoo', recognized: true },
    { type: 'foofoo', recognized: false },
  ]))
    .toEqual('barfoo');
});

test('select first recognized pattern', () => {

  expect(selectRecognizedPattern([
    { type: 'foo', recognized: false },
    { type: 'bar', recognized: true },
    { type: 'foobar', recognized: true },
    { type: 'barfoo', recognized: true },
    { type: 'foofoo', recognized: true },
  ]))
    .toEqual('bar');
});

test('return "other" when none recognized', () => {

  function example(items) {
    expect(selectRecognizedPattern(items)).toEqual(OTHER);
  }

  example([]);
  example([{}]);
  example([{}, {}, {}]);
  example([{ type: 'foo' }]);
  example([{ type: 'foo', recognized: false }]);
  example([{ type: 'foo', recognized: undefined }]);
  example([
    { type: 'foo', recognized: false },
    { type: 'bar', recognized: false },
    { type: 'foobar', recognized: false }]);
});

