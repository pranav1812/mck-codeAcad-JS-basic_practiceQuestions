const isLeapYearArrow= (year)=> {
  if (typeof year!= 'number' || year< 0 || year%1!== 0) return -1;
  return year%4!== 0? false : year%100!== 0? true : year%400!== 0? false : true;
};

function isLeapYearRegular(year) {
  if (typeof year!= 'number' || year< 0 || year%1!== 0) return -1;
  return year%4!== 0? false : year%100!== 0? true : year%400!== 0? false : true;
}

module.exports= {
  isLeapYearArrow,
  isLeapYearRegular
};