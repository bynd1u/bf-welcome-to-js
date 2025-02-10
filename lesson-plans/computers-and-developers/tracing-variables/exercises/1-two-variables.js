'use strict';

/* Two Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]I

*/

// trace the program a few times with different values

let x = 'Peter'; // [x, declare, undefined], [x, initialize, 'Peter']

let y = 'hello ' + x; // [y, declare, undefined], [x, read, 'Peter'], [y, initialize, 'hello Pieter']

console.log(y); // [y, log, 'hello Peter']

y = 'good bye ' + x; // [x, read, 'Peter'], [y, assign, 'good bye Peter']

console.log(y); // [y, log, 'good bye Peter']
