const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if ((typeof str) !== 'string') return false;
  if (str === undefined || str === null) return false;
  let now = Number(str);
  if (now <= 0 || now >= 15 || !now) return false;
  let age = Math.ceil(Math.log(15 / now) * 5730 / .693);
  return age;

};
