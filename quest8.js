const countVowelsArrow= (str)=> {
  let vowels= ['a', 'e', 'i', 'o', 'u'];
  let vowelsInStr= str.split('').filter(chr=> vowels.includes(chr));
  return vowelsInStr.length;
};

function countVowelsRegular(str) {
  let vowels= ['a', 'e', 'i', 'o', 'u'];
  let vowelsInStr= str.split('').filter(chr=> vowels.includes(chr));
  return vowelsInStr.length;
}

module.exports= {
  countVowelsArrow,
  countVowelsRegular
};