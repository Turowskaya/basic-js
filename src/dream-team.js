const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let array = [];

  if(typeof (members) !== 'object' || members === null) {

    return false;

  } else{
    for (i=0; i<members.length; i++){

      if(typeof (members[i]) === 'string'){
        array.push(members[i].trim().slice(0, 1).toUpperCase());
      }

    }

    return array.sort().join('');
  }
};
