import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(string, keyWord) {
    if (!string || !keyWord) {
      throw Error("Incorrect arguments!");
    }

    let str = string.toUpperCase();
    let key = keyWord.toUpperCase();
    let resultArr = [];
    let resultStr = '';
    let keyPosition = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() < 65 || str[i].charCodeAt() > 90) {
        resultArr.push(str[i]);
        continue;
      }
      if (key[keyPosition].charCodeAt() + (str[i].charCodeAt() - 65) <= 90) {
        resultArr.push(key[keyPosition].charCodeAt() + (str[i].charCodeAt() - 65));
      }
      if (key[keyPosition].charCodeAt() + (str[i].charCodeAt() - 65) > 90) {
        resultArr.push((key[keyPosition].charCodeAt() + (str[i].charCodeAt() - 65)) - 90 + 64);
      }
      keyPosition === key.length - 1 ? keyPosition = 0 : keyPosition++;
    }

    for (let i = 0; i < resultArr.length; i++) {
      let letter = String.fromCharCode(resultArr[i]);
      if (typeof (resultArr[i]) !== 'number') {
        resultStr += resultArr[i];
        continue;
      }
      resultStr += letter;
    }
    if (this.reverse === false) {
      resultStr = resultStr.split('').reverse().join('');
    }
    return resultStr;
  }

  decrypt(string, keyWord) {
    if (!string || !keyWord) {
      throw Error("Incorrect arguments!");
    }
    let str = string.toUpperCase();
    let key = keyWord.toUpperCase();
    let resultArr = [];
    let resultStr = '';
    let keyPosition = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() < 65 || str[i].charCodeAt() > 90) {
        resultArr.push(str[i]);
        continue;
      }
      if ((str[i].charCodeAt() + 65 - key[keyPosition].charCodeAt()) > 64) {
        resultArr.push(str[i].charCodeAt() + 65 - key[keyPosition].charCodeAt());
      }
      if (str[i].charCodeAt() + 65 - key[keyPosition].charCodeAt() < 65) {
        resultArr.push(91 - (key[keyPosition].charCodeAt() - str[i].charCodeAt()));
      }
      keyPosition === key.length - 1 ? keyPosition = 0 : keyPosition++;
    }

    for (let i = 0; i < resultArr.length; i++) {
      let letter = String.fromCharCode(resultArr[i]);
      if (typeof (resultArr[i]) !== 'number') {
        resultStr += resultArr[i];
        continue;
      }
      resultStr += letter;
    }
    if (this.reverse === false) {
      resultStr = resultStr.split('').reverse().join('');
    }
    return resultStr;
  }
}
