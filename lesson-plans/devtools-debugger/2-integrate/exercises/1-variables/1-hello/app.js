// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('first-name');
  let lastName = readString('last-name');
  let fullName = `${firstName} ${lastName}`;

  console.log(fullName);

  // --- create a message ---

  let greeting = 'Hello ' + fullName;
  let farewell = 'Good bye ' + fullName;

  let msg = greeting + '\n' + farewell;

  // --- display the message ---

  displayString('output', msg);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
