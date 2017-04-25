# TimeRange
  
time range functions

### Installation
`$ npm install --save time-range`

### Usage

```js
'use strict';

const timeRange = require('time-range');

const times = [
  [ new Date(2017, 3, 24, 10, 10, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 20, 20, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 22, 30, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 24, 23, 40, 0), new Date(2017, 3, 25, 2, 10, 30) ],
];

console.log( 'total minutes = ' + timeRange.calc(times) );
// total minutes = 1682

console.log( 'total seconds = ' + timeRange.calc(times, 'seconds') );
// total seconds = 100920
```

overlap check  

```js
const times2 = [
  [ new Date(2017, 3, 24, 10, 10, 0), new Date(2017, 3, 25, 2, 10, 30) ],
  [ new Date(2017, 3, 25, 2, 10, 29), new Date(2017, 3, 25, 2, 30, 30) ],
];

if (timeRange.overlap(times2)) {
  console.log( 'not overlap.' );
} else {
  console.log( 'overlap or bad case.' );
}
```

### LICENSE
MIT
