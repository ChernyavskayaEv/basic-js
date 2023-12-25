const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsObject = {};
  domains.forEach((item) => {
    let domain = item.split('.').reverse();
    domain.forEach((part, index, arr) => {
      let key;
      if (index === 0) key = `.${part}`;
      else key = `.${arr.slice(0, index + 1).join('.')}`;

      if (!dnsObject[key]) dnsObject[key] = 1;
      else dnsObject[key] += 1;
    });
  });
  return dnsObject;
}

module.exports = {
  getDNSStats,
};
