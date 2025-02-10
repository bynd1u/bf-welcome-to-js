'use strict';

/* Numbers

TODO: create a few variables(numbers):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

let a = 5; // [a, declare, undefined], [a, initialize, 5]

let b = 10; // [b, declare, undefined], [b, initialize, 10]

let sum = a + b; // [sum, declare, undefined], [a, read, 5], [b, read, 10], [sum, initialize, 15]

console.log(sum); // [sum, log, 15]

a = 20; // [a, read, 5], [a, assign, 20]

sum = a + b; // [a, read, 20], [b, read, 10], [sum, assign, 30]
