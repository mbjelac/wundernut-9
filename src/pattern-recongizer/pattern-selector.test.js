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

  function shouldReturnOther(items) {
    expect(selectRecognizedPattern(items)).toEqual(OTHER);
  }

  shouldReturnOther([]);
  shouldReturnOther([{}]);
  shouldReturnOther([{}, {}, {}]);
  shouldReturnOther([{ type: 'foo' }]);
  shouldReturnOther([{ type: 'foo', recognized: false }]);
  shouldReturnOther([{ type: 'foo', recognized: undefined }]);
  shouldReturnOther([
    { type: 'foo', recognized: false },
    { type: 'bar', recognized: false },
    { type: 'foobar', recognized: false }]);
});

