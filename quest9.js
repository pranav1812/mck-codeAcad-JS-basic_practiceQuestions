const replaceEachCharWithNextAsciiCharArrow = (str) => {
  return str.split('').map(chr => String.fromCharCode(chr.charCodeAt(0) + 1)).join('');
};

function replaceEachCharWithNextAsciiCharRegular(str) {
  return str.split('').map(chr => String.fromCharCode(chr.charCodeAt(0) + 1)).join('');
}

module.exports = {
  replaceEachCharWithNextAsciiCharArrow,
  replaceEachCharWithNextAsciiCharRegular
};