const {
  getLargestEvenArrow,
}= require('../quest1');

// test suit 1: accept only arrays
test('getLargestEvenArrow should return -1 if input is not an array', ()=> {
  expect(getLargestEvenArrow('hello')).toBe(-1);
  expect(getLargestEvenArrow(123)).toBe(-1);
  expect(getLargestEvenArrow({})).toBe(-1);
  expect(getLargestEvenArrow(null)).toBe(-1);
  expect(getLargestEvenArrow(undefined)).toBe(-1);
});

// test suit 2: accept only arrays of integers
test('getLargestEvenArrow should return -1 if input is not an array of integers', ()=> {
  expect(getLargestEvenArrow([1, 2, 3])).not.toBe(-1);
  expect(getLargestEvenArrow([1, 2, 'hello'])).toBe(-1);
  expect(getLargestEvenArrow([1, 2, {}])).toBe(-1);
  expect(getLargestEvenArrow([1, 2, null])).toBe(-1);
  expect(getLargestEvenArrow([1, 2, undefined])).toBe(-1);
});

// test suit 3: return -1 if no even numbers
test('getLargestEvenArrow should return -1 if input array has no even numbers', ()=> {
  expect(getLargestEvenArrow([1, 3, 5])).toBe(-1);
  expect(getLargestEvenArrow([1, 3, 5, 7, 9])).toBe(-1);
});

// test suit 4: return largest even number
test('getLargestEvenArrow should return largest even number', ()=> {
  expect(getLargestEvenArrow([1, 2, 3])).toBe(2);
  expect(getLargestEvenArrow([1, 2, 3, 4])).toBe(4);
  expect(getLargestEvenArrow([1, 2, 3, 4, 5, 6])).toBe(6);
  expect(getLargestEvenArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});