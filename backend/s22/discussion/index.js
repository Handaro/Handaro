console.log("Hello World!");

// section syntax, statements, and comments

// Comments:
	// Comments are parts of the code that gets ignored by the language
	// Comments are meant to describe the written code

	/*
		There are two types of comments:
		    1. The single-line comment denoted by two slashes - //
		    2. The multi-line comment denoted by a slash and asterisk 
	*/

// Statements:

// Statements in programming are instructions that we tell the computer to perform
// JS statements usually end with semicolon (;)
// Semicolons are not required in JS, but we will use it to help us train to locate where a statement ends

console.log("I am a statement");
// Syntax:

// A syntax in programming, it is the set of rules that describes how statements must be constructed
// All lines/blocks of code should be written in a specific manner to work. This is due to how these codes were initially programmed to function and perform in a certain manner

// Whitespace (basically, spaces and line breaks) can impact functionality in many computer languages—but not in JavaScript.  In JavaScript, whitespace is used only for readability and has no functional impact.  One effect of this is that a single statement can span multiple lines

console. log("I am another statement");

console.log("and another statement " );

console.
log
(
	"and the last statement"
	);
// Section variables, Declarations, and Initializations

// Variables
/*
   -symbolic names for values in your application and can be also be identifiers
   - it is used to contain data and save in a "memory"
   

// Declaring Variables
/*
  -tell our device that a variable name (identifier) is created and is ready to store data

*/
// let - a keyword that is usually used in declaring variables
let	myVariable;

// console.log() is useful in printing values of variables into the console
console.log(myVariable);//whenever we declare a variable without giving a value, it will automatically be assigned "undefined".

let hello;
// We cannot print a value of the variable that has not been declared yet
console.log(hello);// It will return "is not defined"

// let hello; -> using variables before they are declared will return an error

/* 
	Guides in writing variables:
	    1. Use the 'let/const' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
	    2. Variable names should start with a lowercase character, use camelCase for multiple words.
	    3. For constant variables, use the 'const' keyword.
	    4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.
*/

//  Best practices in naming variabkes:

// 1. Variable names should be descriptive
let firstName = "Michael"; //good variable name
let pokemon = 25000; //bad variable name

// 2. Variable names should start in lowercase letters
let lastName = "Smith"; //good variable name
let LastName = "Smith"; //bad variable name

// 3. Variable names should be in camelCase and without spaces
// let first name = "Mike";
let emailAddress = "mike@mail.com"; //camelCase
let email_address = "mike@mail.com"; // snakeCase

// 4. Variable names cannot be reserved keywords
// const let = "Hello world"; //Syntax Error

// Declaring and initializing variables
/*
   Initialization - the instance where a variable is given it's first/initial value
   - Syntax:
       let/const variableName  = <actualValue>;
*/
let productName = "Desktop Computer"
console.log(productName);

let productPrice =  18999;
console.log(productPrice);

/* 
	When to use JavaScript const? 
		As a general rule, always declare a variable with const unless you know that the value will change.

		Use const when you declare:
			- A new Array
			- A new Object
			- A new Function
*/

// const - keyword that is used for values that are constant and cannot be changed
const interest = 3.68;
console.log(interest);

const pi = 3.14;
console.log(pi);

// Reassign variable values
/*
   -change the initial values or previous value into another new value
   -Syntax:
      variableName = <newValue>

*/
productName = "Laptop"
console.log(productName);

// variable cannot be re-declared within its scope
// let productPrice = 15999;

// interest = 3.99;

// Reassigning vs Initializing Variables

myVariable = "Hello Its Me"
console.log(myVariable);

myVariable = "Ooops Its Me Again";
console.log(myVariable);

// We cannot declare a const variable without initialization
// const discount;
// discount = 20;
// console.log(discount)

//Section Data Types

// 1. Boolean
// usedd to store values relating to the state of ceratin data
let isMarried = false;
let inGoodConduct = true;
console.log(isMarried);
console.log(inGoodConduct);

// 2. Null
// used to intentionally express the absence of a value
let spouse = null;
console.log(spouse);

// 3. Undeefined
// represents the states of a variable that has been declared but has not been assigned a value yet
let label;
console.log(label);

// 4. Number

// Integers/Whole Numbers
let myNumber = 26;
console.log(myNumber);

let negativeNumber = - 10;
console.log(negativeNumber);

// Decimal Numbers/Fractions
let grade = 98.7;
console.log(grade);

// Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

// 5. BigInt
// used for values that are larger in quantity and needs to be precisely arbitrary
const bigInteger = 9007199254740992n; // "n" denotes that the number will be treated as a Big Integer
console.log(bigInteger);

// 6. Strings
// used for series of characters that creates words, phrases, sentence
let myString = "";
// using double quotes
let country = "Philippines";
//using single qoutes
let province = "Metro Manila";

console.log(myString);
console.log(country);
console.log(province);

// 7. Arrays
// used to store multiple values and a special type of object

// similar data types
let grades = [98, 92, 87, 89];
console.log(grades);

// different data types
let random = [98, "Hi", false];
console.log(random);

// 8. Objects
// is special kind of data types that can also store multiple values
let mygrades = {
	firstGrading: 98,
	secondGrading: 92,
	thirdGrading: 87,
	fourthGrading: 89
}
console.log(myGrades);

