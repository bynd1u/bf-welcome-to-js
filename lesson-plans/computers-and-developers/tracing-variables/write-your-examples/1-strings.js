'use strict';

/* Strings

TODO: create a few variables(strings):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

let greeting = 'Hello'; // [greeting, declare, undefined], [greeting, initialize, 'Hello']

let name = 'Alice'; // [name, declare, undefined], [name, initialize, 'Alice']

let message = greeting + ', ' + name + '!'; // [message, declare, undefined], [greeting, read, 'Hello'], [name, read, 'Alice'], [message, initialize, 'Hello, Alice!']

console.log(message); // [message, log, 'Hello, Alice!']

greeting = 'Hi'; // [greeting, read, 'Hello'], [greeting, assign, 'Hi']

message = greeting + ', ' + name + '!'; // [greeting, read, 'Hi'], [name, read, 'Alice'], [message, assign, 'Hi, Alice!']

console.log(message); // [message, log, 'Hi, Alice!']
