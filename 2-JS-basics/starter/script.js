/*
 * Variables and data types
 */

// var firstName = 'Pedro';
// console.log(firstName);

// var lastName = 'Moreira';
// var age = 27;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var number = 23;

/********************************************
 * Variable mutation and type coercion
 */

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/**************************
 * Basic operators
 */

// // Math operators
// var now, yearJohn, yearMark;
// var ageJohn, ageMark;

// now = 2020;
// ageJohn = 28;
// ageMark = 33;
// yearJohn = now - ageJohn;
// console.log(yearJohn);  

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

// /*******************************
//  * Operator precedence
//  */
// var now = 2020;
// var yearJohn = 1992;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// x += y *= 3;
// console.log(x, y);

/****************************
 * CODING CHALLENGE 1 🤓
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height). (mass in kg in height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 🤓 
*/

// var johnMass, johnHeight, johnBMI;
// var markMass, markHeight, markBMI;

// johnMass = 90;
// johnHeight = 1.8;

// johnBMI = johnMass / (johnHeight * johnHeight);

// markMass = 81;
// markHeight = 1.7;

// markBMI = markMass / (markHeight * markHeight);

// var markGreaterThanJohn;
// markGreaterThanJohn = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log("Is Mark's BMI higher than John's 🤔 ?", markGreaterThanJohn);

/******************************************************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon 😊 ');
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters
// var BMIMark = massMark / (heightMark * heightMark);

// var massJohn = 92;
// var heightJohn = 1.95;
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }
