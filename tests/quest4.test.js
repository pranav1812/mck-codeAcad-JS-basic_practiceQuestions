const {
    findLongestWordInArrayArrow
}= require('../quest4');

// should accept only array as input
test("should accept only array as input", ()=> {
    expect(findLongestWordInArrayArrow("qwerty")).toBe(-1);
    expect(findLongestWordInArrayArrow(12)).toBe(-1);
    expect(findLongestWordInArrayArrow(null)).toBe(-1);
})
// all elements should be strings
test("all elements should be strings", ()=> {
    expect(findLongestWordInArrayArrow(["qwerty", null])).toBe(-1);
    expect(findLongestWordInArrayArrow([])).toBe(-1);
})

// should return longest string element
test("should return longest string element", ()=> {
    expect(findLongestWordInArrayArrow(["qwerty", "facebook"])).toBe("facebook");
    expect(findLongestWordInArrayArrow(["qwerty", "facebook", "jest testing"])).toBe("jest testing");
})