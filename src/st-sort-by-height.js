import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  if (!arr.includes(-1)) {
    return arr.sort((a, b) => a - b);
  }
  let newArray = [...arr];
  newArray = newArray.filter(elem => elem !== -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = newArray[0];
      newArray.shift();
    }
  }
  return arr;
}
