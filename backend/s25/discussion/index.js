console.log("Learning JS is Fun!");

// [SECTION] Using prompt()
/*
	- this is a method in javascript that open a window in the browser that gather user input
	- all data/input received using prompt() are of data type "String"
*/
function printInput() {

	let nickname = prompt("Enter your nickname:"); // let nickname = Hillary;
	console.log("Hi, " + nickname); // Hi, Hillary
}

printInput();

// [SECTION] Function Parameters
/*
	- a "parameter" acts a named variable/container that can only be used inside the function
	- it is used to store information that is provided to a function when it is invoked
	- you can directly pass data into the function.
*/
// the value "Monica" is then stored in the parameter "name"
function printName(name) {
	// let name = "Monica";
	// let name = "Phoebe";
	console.log("Hi! My name is " + name);
}

// [SECTION] Function Argument
/*
	- values passed when invoking a function are called arguments. these arguments are thrn stored as the parameters within the function
	- argument is the term used for data passed to a function during invocation
*/
printName("Monica");
printName("Phoebe");
printName("Rachel");

// [SECTION] Variables as Arguments
/*
	- variables can also be used as arguments to be able to pass dynamic data used within javascript as a result of other operations in the code.
	- this allows for code reusability, compared to hard coded values where the information doesn't change allowing function to perform tasks using different inputs
*/
function checkDivisibilityBy8(num) {
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is: " + remainder);
	let isDivisibleBy8 = remainder === 0;
	console.log("Is " + num + " divisible by 8?");
	console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
checkDivisibilityBy8(27);

let numVariable = 81;
checkDivisibilityBy8(numVariable);

// Mini Activity
/*
	- Create a function that will accept a user input using prompt but will not include it inside the function itself. 
	- This function will check if the number given by the user is divisibly by 4.
*/
function checkDivisibilityBy4(num) {
	let remainder = num % 4;
	console.log("The remainder of " + num + " divided by 4 is: " + remainder);
	let isDivisibleBy4 = remainder === 0;
	console.log("Is " + num + " divisible by 4?");
	console.log(isDivisibleBy4);
}

let number = prompt("Enter number here:");
checkDivisibilityBy4(number);

// [SECTION] Functions as Arguments
/*
	- function parameters accepts other functions as arguments
*/
function argumentFunction() {
	console.log("This function was passed as an argument before the message was printed");
}

// functionParameter = argumentFunction
function invokeFunction(functionParameter) {
	// argumentFunction();
	functionParameter();
}

// we invoked the invokeFunction and passed the value argumentFunction as the argument 
invokeFunction(argumentFunction);

/*
	function argumentFunction() {
		console.log("This function was passed as an argument before the message was printed");
	}
*/
console.log(argumentFunction);

// Mini Activity
/*
	- Use function "helloWorld" as an argument to the function "greeting". It should return the value "Hello World!"
*/

function helloWorld() {
	return "Hello World!"
}

function greeting(helloVariable) {
	return helloVariable();
}

let greetingVariable = greeting(helloWorld);
console.log(greetingVariable);

// [SECTION] Multiple Parameters
/*
	- In JavScript, w ecan create more than 1 parameter for a function provided tha the number of arguments and parameters are the same
*/
function displayFullName(firstName, middleName, lastName) {
	/*
		let firstName = Juan
		let middleName = Dela
		let lastName = Cruz
	*/
	/*
		let firstName = John
		let middleName = Smith
		let lastName; -> undefined
	*/
	/*
		let firstName = Jane
		let middleName = Doe
		let lastName = Dela
	*/
	/*
		let firstName = Dela
		let middleName = Cruz
		let lastName = Juan
	*/
	console.log(firstName + " " + middleName + " " + lastName);
}

// the function diplayFullName is invoked the value "Juan", "Dela", "Cruz" is stored in the parameter sequentially
displayFullName("Juan", "Dela", "Cruz");

// If the number of arguments is less than the number of paremeters, all unused parameters will be assigned the value undefined
displayFullName("John", "Smith");

// If the number of arguments is more than the number of parameters, all the excess arguments will not be stored and be ignored
displayFullName("Jane", "Doe", "Dela", "Cruz");

// when it comes to using multiple parameters, the order of the argument matters
displayFullName("Dela", "Cruz", "Juan");

// using variables as arguments
let fname = "Juan";
let mname = "Dela";
let lname = "Cruz";

displayFullName(fname, mname, lname);