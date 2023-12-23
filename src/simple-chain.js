const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  _chainArray: [],

  getLength() {
    return this._chainArray.lenght;
  },
  addLink(value) {
    typeof value === 'number'
      ? this._chainArray.push(value)
      : this._chainArray.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position >= this._chainArray.length
    ) {
      this._chainArray.splice(0, this._chainArray.length);
      throw new Error("You can't remove incorrect link!");
    } else this._chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chainArray.reverse();
    return this;
  },
  finishChain() {
    let result = this._chainArray.join(' )~~( ');
    this._chainArray.splice(0, this._chainArray.length);
    return `( ${result} )`;
  },
};

module.exports = {
  chainMaker,
};
