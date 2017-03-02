var deepFreeze = require('../index.js');

let personBefore = {
  firstName: 'name',
  lastName: 'lastName'
};

let personAfter = {
  firstName: 'name',
  lastName: 'lastName'
};


deepFreeze(personAfter);

personAfter.firstName = 'Joe';

console.assert(personBefore.firstName === personAfter.firstName, {"message": 'the objects are not equals', "before": personBefore, "after": personAfter});
console.log(personBefore);
console.log(personAfter);
