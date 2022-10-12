const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */



const chainMaker = {
  array: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    console.log(this.array.push.length)
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    this.array.push(value)
    return this.array
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(`(${this.array[i]})~~`)
    }
  }
};

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain()

module.exports = {
  chainMaker
};
