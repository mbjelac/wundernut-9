import { shouldFill } from "./fill-rules";

test('rule 1', () => {
  ruleReturns(false, 0)(false);
  ruleReturns(false, 1)(false);
  ruleReturns(false, 2)(true);
  ruleReturns(false, 3)(true);
  ruleReturns(false, 4)(false);
  ruleReturns(false, 5)(false);
  ruleReturns(false, 6)(false);
});

test('rule 2', () => {
  ruleReturns(true, 0)(false);
  ruleReturns(true, 1)(false);
  ruleReturns(true, 2)(true);
  ruleReturns(true, 3)(false);
  ruleReturns(true, 4)(true);
  ruleReturns(true, 5)(false);
  ruleReturns(true, 6)(false);
});

function ruleReturns(aboveCellFilled, neighbourCount) {
  return expectedResult => expect(shouldFill(aboveCellFilled, neighbourCount)).toEqual(expectedResult);
}