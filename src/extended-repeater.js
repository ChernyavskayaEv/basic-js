const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes,
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
    separator = '+',
  } = options;
  let arr = new Array(repeatTimes).fill(str);
  let fullArr = arr;
  if (addition !== undefined) {
    if (addition === null) addition = 'null';
    if (!additionRepeatTimes) fullArr = arr.map((item) => `${item}${addition}`);
    else {
      let fullAdition = new Array(additionRepeatTimes)
        .fill(addition)
        .join(additionSeparator);
      fullArr = arr.map((item) => `${item}${fullAdition}`);
    }
  }

  return fullArr.join(separator);
}

module.exports = {
  repeater,
};
