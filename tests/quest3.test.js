const {
    changeCapitalizationArrow
}= require('../quest3');

// test suit 1: accept only strings
test('changeCapitalizationArrow should return -1 if input is not a string', ()=> {
    expect(changeCapitalizationArrow({})).toBe(-1);
    expect(changeCapitalizationArrow(123)).toBe(-1);
    expect(changeCapitalizationArrow(null)).toBe(-1);
    expect(changeCapitalizationArrow(undefined)).toBe(-1);
});

// test suit 2: return string with changed capitalization
test('changeCapitalizationArrow should return string with changed capitalization', ()=> {
    expect(changeCapitalizationArrow("hello")).toBe("HELLO");
    expect(changeCapitalizationArrow("coDeAcAdEmY")).toBe("COdEaCaDeMy");
});