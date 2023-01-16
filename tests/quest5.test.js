const {
  isLeapYearArrow
}= require('../quest5');

// should only accept whole numbers
test('should only accept whole numbers', ()=> {
  expect(isLeapYearArrow(-369)).toBe(-1);
  expect(isLeapYearArrow(1000.90)).toBe(-1);
  expect(isLeapYearArrow('-369')).toBe(-1);
});

// should tell if the given year is leap year or not
test('should tell if the given year is leap year or not', ()=> {
  expect(isLeapYearArrow(2000)).toBe(true);
  expect(isLeapYearArrow(2020)).toBe(true);
  expect(isLeapYearArrow(2036)).toBe(true);
  expect(isLeapYearArrow(2019)).toBe(false);
  expect(isLeapYearArrow(1800)).toBe(false);
  expect(isLeapYearArrow(2500)).toBe(false);
});