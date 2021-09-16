import {NotImplementedError} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let matrixLength = matrix.length;
  let subMatrixLength = matrix[0].length;
  let newArray = [[]];
  for (let i = 0; i < matrixLength; i++) {
    newArray.push([]);
    for (let j = 0; j < subMatrixLength; j++) {
      newArray[i][j] = 0;
    }
  }
  newArray.pop();
  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < subMatrixLength; j++) {
      let count = 0;
      if (Array.isArray(matrix[i - 1])) {
        if (matrix[i - 1][j - 1]) count += 1;
        if (matrix[i - 1][j]) count += 1;
        if (matrix[i - 1][j + 1]) count += 1;
      }
      if (Array.isArray(matrix[i + 1])) {
        if (matrix[i + 1][j - 1]) count += 1;
        if (matrix[i + 1][j]) count += 1;
        if (matrix[i + 1][j + 1]) count += 1;
      }
      if (matrix[i][j - 1]) count += 1;
      if (matrix[i][j + 1]) count += 1;
      newArray[i][j] = count;
    }
  }
  return newArray;
}
