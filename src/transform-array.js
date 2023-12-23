const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length === 0) return [];
  let transformArray = arr.reduce((newArr, item, index, oldArr) => {
    if (item === '--discard-prev' && index !== 0) {
      if (oldArr[index - 2] === '--discard-next') newArr;
      else newArr.pop();
    }
    if (item === '--double-prev' && index !== 0) {
      if (oldArr[index - 2] === '--discard-next') newArr;
      else newArr.push(oldArr[index - 1]);
    }
    if (item === '--double-next' && index !== oldArr.length - 1)
      newArr.push(oldArr[index + 1]);
    if (item === '--discard-next') newArr;
    if (
      item !== '--discard-prev' &&
      item !== '--discard-next' &&
      item !== '--double-prev' &&
      item !== '--double-next'
    ) {
      if (index !== 0 && oldArr[index - 1] === '--discard-next') newArr;
      else newArr.push(item);
    }
    return newArr;
  }, []);
  return transformArray;
}

module.exports = {
  transform,
};
