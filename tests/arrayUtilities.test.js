const {
  doubleNumbers,
  multiplyAndReturnEvens
}= require('../arrayUtilities');


describe('array utilities', ()=> {
  describe('double numbers', ()=> {
    it('should throw an error stating unsupported type argument is not an array', ()=> {
      expect(()=>{doubleNumbers('qwerty');}).toThrow('Unsupported type');
      expect(()=> {doubleNumbers(null);}).toThrow('Unsupported type');
    });
    it('should return the double to numbers inputted', ()=> {
      expect(doubleNumbers([2,4,5,6])).toEqual([4, 8, 10, 12]);
    });
  });

  describe('multiplyAndReturnEvens', ()=> {
    it('should throw an error stating unsupported type argument is not an array', ()=> {
      expect(()=>{multiplyAndReturnEvens('qwerty', 3);}).toThrow('Unsupported type');
      expect(()=> {multiplyAndReturnEvens(null, 3);}).toThrow('Unsupported type');
    });
    it('should throw an error stating unsupported type argument is not all array elements are numbers', ()=> {
      expect(()=>{multiplyAndReturnEvens(['qwerty'], 3);}).toThrow('Unsupported type');
      expect(()=> {multiplyAndReturnEvens([null, true], 3);}).toThrow('Unsupported type');
    });
    it('should return the triple to numbers inputted', ()=> {
      expect(multiplyAndReturnEvens([2,4,5,6], 3)).toEqual([6, 12, 18]);
    });
  });
});

