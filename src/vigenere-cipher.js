const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type ? type : true;
  }

  encrypt(message, key) {
    if (message === undefined || message === null || key === undefined || key === null) throw new Error('missing parameter');
    let modifyBase = function(letter) {
      let bigLetter = letter.toUpperCase();
      let strOne = base.substr(base.indexOf(bigLetter));
      let strTwo = base.substring(0, base.indexOf(bigLetter));
      return strOne + strTwo;
    }

    let newKey = key;
    if (key.length < message.length) {
      let k = Math.ceil(message.length / key.length);
      for (let i = 1; i < k; i++) {
        newKey = newKey + key;
      }
    }
    newKey = newKey.toUpperCase();
    
    let newMessage = message.toUpperCase();
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let result = [];
    let keyCounter = 0;
    
    for (let i = 0; i < newMessage.length; i++) {

      if (base.indexOf(newMessage[i]) === -1) {
        result[i] = newMessage[i];
      } else {
        let newBase = modifyBase(newKey[keyCounter]);
        result[i] = newBase[base.indexOf(newMessage[i])];
        keyCounter++;
      }
    }
    if (!this.type) result.reverse();
    return result.join('');
  }

  decrypt(message, key) {
    if (message === undefined || message === null || key === undefined || key === null) throw new Error('missing parameter');

    let modifyBase = function(letter) {
      let bigLetter = letter.toUpperCase();
      let strOne = base.substr(base.indexOf(bigLetter));
      let strTwo = base.substring(0, base.indexOf(bigLetter));
      return strOne + strTwo;
    }

    let newKey = key;
    if (key.length < message.length) {
      let k = Math.ceil(message.length / key.length);
      for (let i = 1; i < k; i++) {
        newKey = newKey + key;
      }
    }
    newKey = newKey.toUpperCase();
    
    let newMessage = message.toUpperCase();
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let result = [];
    let keyCounter = 0;
    
    for (let i = 0; i < newMessage.length; i++) {

      if (base.indexOf(newMessage[i]) === -1) {
        result[i] = newMessage[i];
      } else {
        let newBase = modifyBase(newKey[keyCounter]);
        result[i] = base[newBase.indexOf(newMessage[i])];
        keyCounter++;
      }
    }
    if (!this.type) result.reverse();
    return result.join('');
  }
}


module.exports = VigenereCipheringMachine;

