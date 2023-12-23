const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result;
  const summN = (num) => {
    let newN = [...num.toString()].reduce((acc, item) => acc + +item, 0);
    if (newN.toString().length > 1) return summN(newN);
    else return newN;
  };
  if (n.toString().length > 1) result = summN(n);
  return result;
}

module.exports = {
  getSumOfDigits,
};
