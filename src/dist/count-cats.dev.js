"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example

 */


countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]);

function countCats(cats) {
  console.log(cats);
}

module.exports = {
  countCats: countCats
};