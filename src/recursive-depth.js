const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    return Array.isArray(arr)
      ? arr.length
        ? Math.max(
            ...arr.map((a) => this.calculateDepth(a, depth + 1)).flat(Infinity)
          )
        : depth + 1
      : depth;
  }
}

module.exports = {
  DepthCalculator,
};
