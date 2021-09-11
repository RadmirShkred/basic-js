import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const workArr = [...arr];

  if (workArr.includes('--discard-next') && workArr.includes('--double-prev')) {
    const discardNext = workArr.indexOf('--discard-next');
    const doublePrev = workArr.indexOf('--double-prev');
    const prevArr = workArr.slice(0, discardNext);
    const nextArr = workArr.slice(doublePrev + 1);
    return [...prevArr, ...nextArr];
  }

  if (workArr.includes('--double-next') && workArr.includes('--double-prev')) {
    const doubleNext = workArr.indexOf('--double-next');
    const doublePrev = workArr.indexOf('--double-prev');
    const doubleDoubled = workArr[doubleNext + 1];
    const prevArr = workArr.slice(0, doubleNext);
    const nextArr = workArr.slice(doublePrev + 1);
    return [...prevArr, doubleDoubled, doubleDoubled, doubleDoubled, ...nextArr];
  }

  if (workArr.includes('--discard-next') && workArr.includes('--discard-prev')) {
    const discardNext = workArr.indexOf('--discard-next');
    const discardPrev = workArr.indexOf('--discard-prev');
    const prevArr = workArr.slice(0, discardNext);
    const nextArr = workArr.slice(discardPrev + 1);
    return [...prevArr, ...nextArr];
  }

  if (workArr.includes('--double-next') && workArr.includes('--discard-prev')) {
    const doubleNext = workArr.indexOf('--double-next');
    const discardPrev = workArr.indexOf('--discard-prev');
    const discardDoubled = workArr[doubleNext + 1];
    const prevArr = workArr.slice(0, doubleNext);
    const nextArr = workArr.slice(discardPrev + 1);
    return [...prevArr, discardDoubled, ...nextArr];
  }

  if (workArr.includes('--double-next')) {
    const separatorDN = workArr.indexOf('--double-next');
    if (workArr[separatorDN] === workArr[workArr.length - 1]) {
      return workArr.slice(0, separatorDN);
    }
    const doubledNum = workArr[separatorDN + 1];
    const prevArr = workArr.slice(0, separatorDN);
    const nextArr = workArr.slice(separatorDN + 1);
    return [...prevArr, doubledNum, ...nextArr];
  }
  if (workArr.includes('--discard-next')) {
    const separatorDisN = workArr.indexOf('--discard-next');
    if (workArr[separatorDisN] === workArr[workArr.length - 1]) {
      return workArr.slice(0, separatorDisN);
    }
    const prevArr = workArr.slice(0, separatorDisN);
    const nextArr = workArr.slice(separatorDisN + 2);
    return [...prevArr, ...nextArr];
  }

  if (workArr.includes('--double-prev')) {
    const separatorDP = workArr.indexOf('--double-prev');
    if (workArr[separatorDP] === workArr[0]) {
      return workArr.slice(1);
    }
    const doubledNumPrev = workArr[separatorDP - 1];
    const prevArr = workArr.slice(0, separatorDP);
    const nextArr = workArr.slice(separatorDP + 1);
    return [...prevArr, doubledNumPrev, ...nextArr];
  }

  if (workArr.includes('--discard-prev')) {
    const separatorDisPrev = workArr.indexOf('--discard-prev');
    if (workArr[separatorDisPrev] === workArr[0]) {
      return workArr.slice(1);
    }
    const prevArr = workArr.slice(0, separatorDisPrev - 1);
    const nextArr = workArr.slice(separatorDisPrev + 1);
    return [...prevArr, ...nextArr];
  }

  return workArr;
}
