/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID;
const ageIsValid = Number.isInteger(currentAge);
const randomNumber = Math.random()*20;
//contain a random number between 0 and 20
const randomInteger = Math.floor(randomNumber);
//randomInteger, which should take the value
//in randomNumber and round it down to the nearest
// integer.
const randomUserID = randomInteger+1000000000;
//randomUserID, which should convert randomInteger
//into a valid ID number — an integer between 1000000001
// and 1000000020.
