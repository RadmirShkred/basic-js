import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length === 1 && matrix[i][0] === 0) break;
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j + 1] === 0) {
        newArray = [...newArray, ...matrix[i].slice(0, j + 1)];
        for (const elem of newArray) {
          count += elem;
        }
        return count;
      }
    }
    newArray = [...newArray, ...matrix[i]];
  }
  for (const elem of newArray) {
    count += elem;
  }
  return count;
}
