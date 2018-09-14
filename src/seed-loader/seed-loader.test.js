import { loadPatternSeeds } from "./seed-loader";

test('load seeds', ()=>{

  const data = loadPatternSeeds('src/seed-loader/seed-loader-test-data.txt');

  expect(data).toEqual([
    'foo',
    'bar',
    'foobar',
    'barfoo',
    'oof',
    'rab',
  ]);

});