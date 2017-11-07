/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
newID = oldID + 1000000000;

ageIsValid = Number.isInteger(currentAge);

randomNumber = Math.floor(Math.random() * 20);

randomInteger = Math.floor(randomNumber);

//WRONG  randomUserId = Number.isInteger((randomInteger) + 1000000001);
//WRONG  randomUserId = Math.floor(Math.random() * 1000000001);
randomUserID = randomInteger + 1000000001;
