const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = [].concat(...matrix).map(e => e === '^^' ? 1 : 0);
  return arr.reduce((a, b) => a + b, 0);

};
