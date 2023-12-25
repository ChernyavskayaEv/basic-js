const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = [...n.toString()].reduce((acc, item, index, arr) => {
    acc.push([...arr.slice(0, index), ...arr.slice(index + 1)].join(''));
    return acc;
  }, []);
  return Math.max(...nums);
}

module.exports = {
  deleteDigit,
};
