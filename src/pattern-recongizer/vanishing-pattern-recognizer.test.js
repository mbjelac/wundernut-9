import { recognizeVanishingPattern } from "./pattern-recognizer";

test('at least one empty row required for vanishing pattern', () => {

  expect(recognizeVanishingPattern([
     '#####',
     '.#.#.',
     '#....',
     '#####',
     '.....',
    ]))
    .toBeTruthy();

  expect(recognizeVanishingPattern([
     '#####',
     '#.###',
     '#....',
    ]))
    .toBeFalsy();

  expect(recognizeVanishingPattern([
     '#####',
     '.....',
     '#.###',
     '#....',
    ]))
    .toBeTruthy();

  expect(recognizeVanishingPattern([
     '.....',
     '.....',
     '.....',
     '.....',
    ]))
    .toBeTruthy();

  expect(recognizeVanishingPattern([
     '#',
    ]))
    .toBeFalsy();

}); 