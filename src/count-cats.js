import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let counter = 0;
    for (const subArr of matrix) {
        if (Array.isArray(subArr)) {
            for (const subArrElement of subArr) {
                if (subArrElement === '^^') {
                    counter += 1;
                }
            }
        }
    }
    return counter;
}
