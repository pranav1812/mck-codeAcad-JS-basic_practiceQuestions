// let divideByZero= (num)=> num/0;

let divide= (dividend, divisor)=> {
  if (!dividend || !divisor) throw new Error('inappropriate args: (dividend, divisor)');
  if (typeof divisor!= 'number' || typeof dividend!= 'number') throw new Error('datatype not allowed');
  if (divisor=== 0) throw new Error('Operation not allowed division by zero');
  return dividend/divisor;
};

module.exports= {
  divide
};