const {
  checkEqualDigitsArrow,
}= require('../quest2.js');

// test suit 1: accept only integers
test('checkEqualDigitsArrow should return false if input is not an integer', ()=> {
  expect(checkEqualDigitsArrow('hello')).toBe(false);
  expect(checkEqualDigitsArrow({})).toBe(false);
  expect(checkEqualDigitsArrow(null)).toBe(false);
  expect(checkEqualDigitsArrow(undefined)).toBe(false);
});

// test suit 2: return true if all digits are equal
test('checkEqualDigitsArrow should return true if all digits are equal', ()=> {
  expect(checkEqualDigitsArrow(111)).toBe(true);
  expect(checkEqualDigitsArrow(222)).toBe(true);
  expect(checkEqualDigitsArrow(333)).toBe(true);
  expect(checkEqualDigitsArrow(444)).toBe(true);
  expect(checkEqualDigitsArrow(555)).toBe(true);
  expect(checkEqualDigitsArrow(666)).toBe(true);
  expect(checkEqualDigitsArrow(777)).toBe(true);
  expect(checkEqualDigitsArrow(888)).toBe(true);
  expect(checkEqualDigitsArrow(999)).toBe(true);
});