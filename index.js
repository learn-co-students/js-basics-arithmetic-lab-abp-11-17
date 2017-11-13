/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = oldID + 1000000000;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.floor(Math.random() * 10) + 1;
let randomInteger = Math.floor(0.5) + randomNumber;
let randomUserID = Math.max(1, 10) + 1000000000 + randomInteger;
