const getLargestEvenArrow= (arr)=> {
  // check if arr is an array
  if (!Array.isArray(arr)) return -1;

  // all elements should be of type integer
  if (arr.some(itm=> typeof itm !== 'number')) return -1;   

  if (!arr.some(itm=> itm%2 === 0)) return -1;

  // // filter out even numbers
  // const evenNums= arr.filter(itm=> itm%2=== 0)

  // // if len== 0: return -1
  // if (evenNums.length=== 0) return -1

  // return max num
  // return Math.max(...evenNums)
  return arr.reduce((acc, curr)=> acc%2=== 0? curr%2=== 0? acc> curr? acc: curr : acc : curr);
};

function getLargestEvenRegular(arr) {
  // check if arr is an array
  if (!Array.isArray(arr)) return -1;

  // all elements should be of type integer
  if (arr.some(itm=> typeof itm !== 'number')) return -1;   

  // filter out even numbers
  const evenNums= arr.filter(itm=> itm%2=== 0);

  // if len== 0: return -1
  if (evenNums.length=== 0) return -1;

  // return max num
  // return Math.max(...evenNums)
  return arr.reduce((a, b)=> a>b? a: b);
}

module.exports= {
  getLargestEvenArrow,
  getLargestEvenRegular
};