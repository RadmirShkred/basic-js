import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value) {
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((position ^ 0) !== position || typeof (position) !== 'number' || position < 1 || position > this.chain.length - 1) {
      this.chain.splice(0, this.chain.length);
      throw Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return string;
  }
};
