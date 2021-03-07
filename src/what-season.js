const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date === null || !(date instanceof Date)) throw new Error('THROWN');
  if (date.constructor.name !== "Date" || Object.getOwnPropertyNames(date).length != 0) throw new Error('THROWN');
  if (date === null) throw new Error('Error');
  if (Number.isNaN(date))  throw new Error('Error');

  let monthNumber = date.getMonth();
  let seasonName = '';
  if ((monthNumber >= 0 && monthNumber < 2) || monthNumber >= 11) seasonName = 'winter';
  if (monthNumber >= 2 && monthNumber < 5) seasonName = 'spring';
  if (monthNumber >= 5 && monthNumber < 8) seasonName = 'summer';
  if (monthNumber >= 8 && monthNumber < 11) seasonName = 'autumn';
  return seasonName;
};

