import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  const arr = email.split('@');
  if (arr.length === 2) {
    return arr[1];
  }
  return arr[2];
}
