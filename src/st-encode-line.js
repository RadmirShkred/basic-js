import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str === '') return str;
  const res = [];
  let count = 1;
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count === 1) {
        res.push(arr[i]);
      } else {
        res.push(`${count}${arr[i]}`);
      }
      count = 1;
    }
  }
  return res.join('');
}
