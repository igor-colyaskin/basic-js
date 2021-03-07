const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    if (!this.chain) return 0;
    let arr = this.chain.split('~~');
    return arr.length;

  },
  addLink(value) {
    value = value === undefined ? ' ' : ' ' + value + ' ';
    if (this.chain) {
      this.chain = this.chain + '~~(' + value + ')';
    } else {
      this.chain = '(' + value + ')';
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0) {
      delete this.chain;
      throw new Error('impossible position');
      return;
    }
    let arr = this.chain.split('~~');
    let x = arr.splice(position - 1, 1);
    this.chain = arr.join('~~');
    return this;
  },
  reverseChain() {
    if (!this.chain) return this;
    let arr = this.chain.split('~~');
    arr = arr.reverse();
    this.chain = arr.join('~~');
    return this;
  },
  finishChain() {
    let result = this.chain;
    delete this.chain;
    return result;
  }
};

module.exports = chainMaker;
