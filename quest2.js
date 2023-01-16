const checkEqualDigitsArrow= (num)=> {
  if (typeof num!== 'number') return false;
  let digit= num% 10;
  num= Math.floor(num/ 10);
  while (num> 0) {
    let temp= num% 10;
    // console.log(temp, digit, num)
    if (temp!= digit) return false;
    num= Math.floor(num/ 10);
  }
  return true;
};

function checkEqualDigitsRegular(num) {
  if (typeof num!== 'number') return false;
  let digit= num% 10;
  num= Math.floor(num/ 10);
  while (num> 0) {
    let temp= num% 10;
    if (temp!= digit) return false;
    num= Math.floor(num/ 10);
  }
  return true;
}

console.log(checkEqualDigitsArrow(111));
module.exports= {
  checkEqualDigitsArrow,
  checkEqualDigitsRegular
};