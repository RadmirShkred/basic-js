import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let string = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = options.separator ? String(options.separator) : '+';
  let addition = options.addition !== undefined ? String(options.addition) : null;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';
  let firstString = '';
  let secondString = '';

  if (addition && additionRepeatTimes) {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      if (i < additionRepeatTimes) {
        secondString += addition + additionSeparator;
      } else {
        secondString += addition;
      }
    }
  } else {
    secondString = addition;
  }

  if (string && repeatTimes) {
    for (let i = 1; i <= repeatTimes; i++) {
      if (i < repeatTimes) {
        firstString += secondString ? string + secondString + separator : string + separator;
      } else {
        firstString += secondString ? string + secondString : string;
      }
    }
    return firstString;
  }
  if (string) {
    return string + secondString;
  }
  return secondString;
}
