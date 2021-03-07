const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let opt = { repeatTimes: 1, separator: '+', addition: 'x', additionRepeatTimes: 1, additionSeparator: '|' };
  if (options && typeof options === 'object') opt = options;

  let addition = opt.addition + '';
  if (typeof opt.addition === 'object') addition = addition.toString();
  if (opt.addition === null) addition = 'null';
  if (opt.addition === undefined) addition = '';

  let additionRepeatTimes = opt.additionRepeatTimes ? opt.additionRepeatTimes : '1';
  let arrAddition = new Array(additionRepeatTimes);
  arrAddition = arrAddition.fill(addition);
  let additionSeparator = opt.additionSeparator ? '' + opt.additionSeparator : '|';
  let tail = arrAddition.join(additionSeparator);

  let separator = opt.separator ? '' + opt.separator : '+';
  let repeatTimes = opt.repeatTimes ? opt.repeatTimes : 1;
  let arrRepeat = new Array(repeatTimes);

  let strRepeat = str + '';
  if (str === null) {
    strRepeat = 'null';
  } else if (str === true) {
    strRepeat = 'true';
  } else if (str === false) {
    strRepeat = 'false';
  } else if (typeof str === 'object') {
    strRepeat = strRepeat.toString();
  }

  arrRepeat = arrRepeat.fill(strRepeat + tail);
  let whole = arrRepeat.join(separator);
  return whole;

};
