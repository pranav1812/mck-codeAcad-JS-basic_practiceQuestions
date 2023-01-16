const {
  endsWithScriptArrow
}= require('../quest6');

// should only accept strings with length >= 6
test('should only except strings with length >= 6', ()=> {
  expect(endsWithScriptArrow(345)).toBe(-1);
  expect(endsWithScriptArrow(null)).toBe(-1);
  expect(endsWithScriptArrow('apple')).toBe(-1);
});

// should return whether the 6 or higher length string ends with Script
test('should return whether the 6 or higher length string ends with \'Script\'', ()=> {
  expect(endsWithScriptArrow('mckinsey')).toBe(false);
  expect(endsWithScriptArrow('javaScript')).toBe(true);
  expect(endsWithScriptArrow('typescript')).toBe(false);
});