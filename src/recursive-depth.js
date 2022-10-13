const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(array) {
    throw new NotImplementedError('Not implemented');
    // if (Array.isArray(array)) {
    //   ++depth
    //   for (let i = 0; i < array.length; i++) {
    //     if (Array.isArray(array[i])) {
    //       arr = arr.flat()
    //       calculateDepth(arr)
    //     }
    //   }
    //   return `Array depth = ${depth}`
    // }
    // return console.error(`Invalid input: argument data type must be 'array'`)
  }
}

// const getArrayDepth = value => Array.isArray(value) ?
//   1 + Math.max(0, ...value.map(getArrayDepth)) :
//   0;

// console.log(getArrayDepth([1, 2, 3, [4, 5]]))

module.exports = {
  DepthCalculator
};
