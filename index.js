'use strict'
const deepFreeze = obj => {
  let props = Object.getOwnPropertyNames(obj);

  props.forEach(name => {
    let prop = obj[name];

    if (typeof prop === 'object' && prop !== null)
      deepFreeze(prop);
  });

  return Object.freeze(obj);
};

module.exports = deepFreeze;
