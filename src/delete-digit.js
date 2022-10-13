const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

deleteDigit(152);

function deleteDigit(n) {
  let arr = [];
  let num = n.toString().split('');
  let number;

  for (let i = 0; i < num.length; i++) {
    number = num.slice(0, i) + num.slice(i + 1)
    console.log(+number.split(',').join(''))
    arr.push(+number.split(',').join(''))
  }

  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
