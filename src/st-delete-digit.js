import {NotImplementedError} from '../extensions/index.js';

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
export default function deleteDigit(n) {
  const arrDigits = String(n).split('');
  const comparator = [];
  for (let i = 0; i < arrDigits.length; i++) {
    let medium = [...arrDigits];
    medium.splice(i, 1);
    comparator.push(medium.join(''));
  }
  return Math.max.apply(null, comparator);
}
