import {NotImplementedError} from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  if (domains.length === 0) return {};
  let res = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = [];
    let str = '';
    domains[i].replace(/\w+/g, match => arr.push(`.${match}`));
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
      (typeof res[str] !== 'undefined') ? res[str] += 1 : res[str] = 1;
    }
  }
  return res;
}
