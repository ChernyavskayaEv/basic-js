const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  let checkLevel = (arr) =>
    arr.forEach((item) => {
      if (item === '^^') count++;
      if (Array.isArray(item)) checkLevel(item);
    });

  matrix.forEach((item) => checkLevel(item));
  return count;
}

module.exports = {
  countCats,
};
