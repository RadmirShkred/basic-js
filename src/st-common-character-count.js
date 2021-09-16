import {NotImplementedError} from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  if (s1 === '') return 0;
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[j]);
        arr2[j] = null;
        i++;
      }
    }
  }
  return res.length;
}
