'use strict';

let firstName = prompt('enter your first firstName:');
let lastName = prompt('enter your last firstName:');

let greeting = '';
if (!firstName && !lastName) {
  greeting = 'hello anonymous.';
} else if (firstName && !lastName) {
  greeting = 'hello ' + firstName + '!';
} else if (lastName && !firstName) {
  greeting = 'hello ' + lastName + '!';
} else {
  greeting = 'hello ' + firstName + ' ' + lastName + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full firstName.
*/
