// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  // read a string from the <input> with id "to-double"
  let text = readString('to-double');

  let doubled = '';
  for (let nextChar of text) {
    doubled = doubled + nextChar + nextChar;
  }

  // --- repeat the text ---
  let amountOfCopies = 4;

  let repeated = '';

  for (let i = 1; i <= amountOfCopies; i++) {
    repeated += `${i}. ${doubled}\n`;
  }

  // --- display the repeated text ---

  // display a string to the <pre> with id "doubled-input"
  displayString('doubled-input', repeated);
});

/*  ===== Challenges =====

  - Copy the user's text 4 times
  - Number the copies like this:
    1. asdf
    2. asdf
    3. asdf
    4. asdf

*/
