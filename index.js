/*
Variables defined in the test suite:
- oldID
- currentAge
You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = oldID + 1000000000

const ageIsValid = Number.isInteger (currentAge)
// variable ageisValid check whether the value of currentAge is an integer.
const randomNumber = Math.floor (Math.random()*20) +1
// Returns random number between 0 and .999..., say .5, multiplied by the range of numbers we want, in this case 20 (=10) which gives a random number between 0 and 19, which is one les than our desired range of 20, so add 1. We want an integer so then round down to nearest integer with Math.floor()
const randomInteger = Math.floor (randomNumber)
const randomUserID = randomInteger + 1000000001
