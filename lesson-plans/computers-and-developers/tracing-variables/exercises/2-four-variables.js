'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

let a = 'Peter'; // [a, declare, undefined], [a, initialize, 'Peter']

let b = 'Rabbit'; // [b, declare, undefined], [b, initialize, 'Rabbit']

let c = a + ' ' + b; // [c, declare, undefined], [a, read, 'Peter'], [b, read, 'Rabbit'], [c, initialize, 'Peter Rabbit']

let d = 'hello ' + c; // [d, declare, undefined], [c, read, 'Peter Rabbit'], [d, initialize, 'hello Peter Rabbit']

console.log(d); // [d, log, 'hello Peter Rabbit']

d = 'good bye ' + c; // [c, read, 'Peter Rabbit'], [d, assign, 'good bye Peter Rabbit']

console.log(d); // [d, log, 'good bye Peter Rabbit']
