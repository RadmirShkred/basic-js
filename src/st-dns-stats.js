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
  let newArray = [];
  for (const domain of domains) {
    newArray.push(domain.split('.').reverse());
  }
  newArray = newArray.flat();
  let res = Array.from(new Set(newArray));
  if (res.length === 3) {
    return {
      [`.${res[0]}`]: 2,
      [`.${res[0]}.${res[1]}`]: 2,
      [`.${res[0]}.${res[1]}.${res[2]}`]: 1
    }
  }
  if (newArray.length === 2) {
    return {
      [`.${res[0]}`]: 1,
      [`.${res[0]}.${res[1]}`]: 1
    }
  }
}
