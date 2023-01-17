const _checkArrayOfNumbers= (numbers)=> {
  if (!Array.isArray(numbers) || numbers.some(num=> typeof num!== 'number')) {
    return false;
  }
  return true;
}; // whole numbers

const doubleNumbers= (numbers)=> {
  if (!_checkArrayOfNumbers(numbers)) throw new Error('Unsupported type');
  if (numbers.some(num=> typeof num!== 'number')) return -1;
  return numbers.map(num=> num*2);
};

const _filterEvenNumbers= (numbers)=> {
  return numbers.filter(num=> num%2== 0);
};

const multiplyAndReturnEvens= (numbers, multiplier)=> {
  if (!_checkArrayOfNumbers(numbers)) throw new Error('Unsupported type');

  let multipliedWithMap= numbers.map(num=> num*multiplier);

  let multipliedWithFilter= numbers.filter(num=> num*multiplier);

  let multipliedWithReduce= numbers.reduce((acc, curr)=> {
    if (curr*multiplier % 2=== 0) acc.push(curr*multiplier);
    return acc;
  }, []); // already filtered out evens

  console.log(multipliedWithFilter, multipliedWithMap, multipliedWithReduce);
  console.log(multipliedWithMap);

  return _filterEvenNumbers(multipliedWithMap);
};

const getTripleNumbers= (numbers)=> numbers.reduce((acc, item)=> {
  if (item%2=== 0) acc.push(item*3);
  return acc; // returning is very important, othrewise acc will pass as undefined for next iteration
}, []);

module.exports= {
  doubleNumbers,
  multiplyAndReturnEvens,
  getTripleNumbers
};