const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || members === null) return false;
  if (!Array.isArray(members)) return false;
  let y = members.filter(e => (typeof e) === 'string' ? true : false);
  let z = y.filter(e => !(/[^A-Za-z _]/.test(e)));
  let a = z.map(e => e.trim());
  let b = a.map(e => e[0].toUpperCase());
  let c = b.sort();
  return c.join('');

};
