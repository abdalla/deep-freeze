'use strict'

const deepFreeze = obj => {

  var props = Object.getOwnPropertyNames(obj);

  props.forEach(name => {
    var prop = obj[name];

    if (typeof prop === 'object' && prop !== null)
      deepFreeze(prop);
  });

  return Object.freeze(obj);
};

module.exports = deepFreeze;
