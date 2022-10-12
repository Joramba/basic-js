const { NotImplementedError } = require('../extensions/index.js');

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

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(item => {
      return typeof (item) == 'string' ? item.trim()[0].toUpperCase() : '';
    }).sort().join('');
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
