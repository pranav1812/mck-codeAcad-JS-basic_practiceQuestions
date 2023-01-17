const {
  divide
}= require('../errorHandling');

describe('errorHandling', ()=> {
  describe('divide', ()=> {
    it('should throw datatype not allowed error when non numbers are passed', ()=> {
      expect(()=> {divide('qwerty', 22);}).toThrow('datatype not allowed');
    });
    it('should throw inappropriate arguments error when incomplete args are passed', ()=> {
      expect(()=> {divide(99);}).toThrow('inappropriate args: (dividend, divisor)');
    });
    it('should throw division by zero error when divisor is 0', ()=> {
      expect(()=> {divide(99, 0);}).toThrow('Operation not allowed division by zero');
    });
    it('should divide dividend with the divisor when legal arguments are passed', ()=> {
      expect(divide(33, 3)).toBe(11);
    });
  });
});