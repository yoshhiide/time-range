'use strict';

module.exports = (times) => {
  if (!Array.isArray(times)) return false;
  if (0 === times.length) return false;

  for (let i = 0; i < times.length - 1; ++i) {
    for (let j = 1; j < times.length; ++j) {
      const [ from1, to1 ] = times[i];
      const [ from2, to2 ] = times[j];
      if (from1 > to1) return false;
      if (from2 > to2) return false;
      if ((from1 < from2) && (from2 < to1)) return false;
      if ((from2 < from1) && (from1 < to2)) return false;
    }
  }

  return true;
};
