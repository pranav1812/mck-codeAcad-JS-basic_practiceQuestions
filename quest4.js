const findLongestWordInArrayArrow= (arr)=> {
  if (!Array.isArray(arr)) return -1;
  if (arr.some(val=> typeof val !== 'string' )) return -1;
  if (arr.length== 0) return -1;
  return arr.reduce((x, y)=> x.length > y.length ? x : x.length< y.length? y : x< y? x: y);
};

function findLongestWordInArrayRegular(arr) {
  if (!Array.isArray(arr)) return -1;
  if (arr.some(val=> typeof val !== 'string' )) return -1;
  if (arr.length== 0) return -1;
  return arr.reduce(function(x, y) {
    return x.length > y.length ? x : x.length< y.length? y : x< y? x: y;
  });
}

module.exports= {
  findLongestWordInArrayArrow,
  findLongestWordInArrayRegular
};