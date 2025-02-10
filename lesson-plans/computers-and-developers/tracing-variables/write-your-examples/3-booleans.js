'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

let isSunny = true; // declare, initialize

let isWeekend = false; // declare, initialize

let canGoOutside = isSunny && isWeekend; // declare, read, read, initialize

console.log(canGoOutside); // log

isWeekend = true; // read, assign

canGoOutside = isSunny && isWeekend; // read, read, assign

console.log(canGoOutside); // log
