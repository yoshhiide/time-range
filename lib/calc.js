'use strict';

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
  const fromTime = new Date(from);
  const toTime = new Date(to);

  if (invalidTest(fromTime)) {
    console.log('Invalid Date : ', fromTime);
    return;
  }

  if (invalidTest(toTime)) {
    console.log('Invalid Date : ', toTime);
    return;
  }

  if (toTime < fromTime) {
    return;
  }

  return toTime - fromTime;
};

const invalid = new RegExp('INVALID DATE', 'i');
const invalidTest = (time) => invalid.test(time);
const calcSeconds = (millisecond) => Math.floor(millisecond / 1000);
const calcMinutes = (millisecond) => Math.floor(calcSeconds(millisecond) / 60);
