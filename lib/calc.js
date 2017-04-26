'use strict';

const validDate = require('./valid-date');

module.exports = (times, opts) => {
  if (!Array.isArray(times)) return false;

  let millisecond = 0;

  for (let [ from, to ] of times) {
    const seconds = calcDiffer(from, to);
    if (!seconds && (seconds !== 0)) return;

    millisecond += seconds;
  }

  if (opts === 'seconds' || opts === 'sec') {
    return calcSeconds(millisecond);
  } else {
    return calcMinutes(millisecond);
  }
};

const calcDiffer = (from, to) => {
  if (!validDate(from) || !validDate(to)) {
    return false;
  }

  const fromTime = new Date(from);
  const toTime = new Date(to);

  if (toTime < fromTime) {
    return false;
  }

  return toTime - fromTime;
};

const calcSeconds = (millisecond) => Math.floor(millisecond / 1000);
const calcMinutes = (millisecond) => Math.floor(calcSeconds(millisecond) / 60);
