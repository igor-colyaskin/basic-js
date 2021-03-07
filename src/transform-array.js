const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('wrong parameter');
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
       if (arr[i] === undefined || arr[i] === null) {
          result[i] = '&&';
          continue;
        }
     /*    if (Number.isNaN(arr[i])) {
          result[i] = arr[i];
          continue;
        }*/

    if (arr[i] === '--discard-next' && i == arr.length - 1) {
      result[i] = '&&';
      return result.filter(e => e !== '&&');
    } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
      result[i + 1] = '&&';
      result[i] = '&&';
      i++
    } else if (arr[i] === '--discard-prev' && i == 0) {
      continue;
    } else if (arr[i] === '--discard-prev' && i > 0) {
      result[i - 1] = '&&';
      result[i] = '&&';
    } else if (arr[i] === '--double-next' && i == arr.length - 1) {
      return result.filter(e => e !== '&&');
    } else if (arr[i] === '--double-next' && i < arr.length - 1) {
      result[i] = arr[i + 1];
    } else if (arr[i] === '--double-prev' && i == 0) {
      continue;
    } else if (arr[i] === '--double-prev' && i > 0) {
      result[i] = result[i - 1];
    } else {
      result[i] = arr[i];
    }
  } // end for
  res = result.filter(e => e !== '&&');
  return res;
};
