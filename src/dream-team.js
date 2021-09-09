import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (typeof members === 'number' || typeof members === 'boolean' || members === null || members === undefined || !Array.isArray(members)) return false;
  let result = '';
  let newString = '';
  for (const member of members) {
    if (typeof member !== 'string') continue;
    newString = member.trim();
    result += newString[0];
  }
  result = result.toUpperCase();
  return result.split('').sort().join('');
}
