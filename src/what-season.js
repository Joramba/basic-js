const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

getSeason('foo')
getSeason({ John: 'Smith' })
getSeason(20192701)
getSeason([2019, '27', 0 + '1'])
getSeason(() => new Date())

function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return "Invalid date!"
  }
  return (date.getMonth() >= 0 && date.getMonth() < 2) || date.getMonth() == 11 ? 'winter' : date.getMonth() >= 2 && date.getMonth() < 5 ? 'spring' : date.getMonth() >= 5 && date.getMonth() < 8 ? 'summer' : 'autumn';
}

module.exports = {
  getSeason
};
