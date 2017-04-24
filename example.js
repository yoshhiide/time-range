'use strict';

const timeRange = require('./lib/time-range');
//const timeRange = require('time-range');

const times = [
  [ new Date(2017, 3, 24, 10, 10, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 20, 20, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 22, 30, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 23, 40, 0), new Date(2017, 3, 25, 2, 10, 30) ],
];

console.log( 'total minutes = ' + timeRange.calc(times) );
console.log( 'total seconds = ' + timeRange.calc(times, 'seconds') );
