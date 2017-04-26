'use strict';

const validDate = require('./valid-date');

module.exports = (arr) => {
  if (!Array.isArray(arr)) return false;

  for (let nestArr of arr) {
    if (!Array.isArray(nestArr)) return false;

    const valid = nestArr.every(validDate);
    if (!valid) return false;
  }

  return true;
};
