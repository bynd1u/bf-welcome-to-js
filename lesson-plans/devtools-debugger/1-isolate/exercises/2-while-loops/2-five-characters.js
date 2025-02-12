'use strict';

let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter less then 10 characters:');

  if (input.length >= 10) {
    alert('your text is too long');
    continue;
  }

  input += prompt(`enter ${10 - input.length} more characters:`);

  if (input.length !== 10) {
    alert('try again pls');
  }
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
