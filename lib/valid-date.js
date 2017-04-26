'use strict';

module.exports = (time) => {
  const datetime = new Date(time);

  if (invalidTest(datetime)) {
    console.log('Invalid Date : ', datetime);
    return false;
  }

  return true;
};

const invalid = new RegExp('INVALID DATE', 'i');
const invalidTest = (datetime) => invalid.test(datetime);
