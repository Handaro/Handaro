console.log("Hello World!");

// [SECTION] Functions
/*
	- Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
 	- Functions are mostly created to create complicated tasks to run several lines of code in succession
	- They are also used to prevent repeating lines/blocks of codes that perform the same task/function
*/

// [SECTION] Function Declaration
/*
	- this is where we declare the function and add the block of codes that will perform the task
	- this is where we tell the computer what to do
*/

// function keyword - used to define a javascript function
// functionName - functions are named to be called later in the code
// function block {} - statements which comprosies the body of the function
function sayHello() {
	// function statement - defines a function with specified parameters
	console.log("Hello everyone!");
}

// [SECTION] Function Invocation
/*
	- The codeblock and statements inside a function is not immediately executed when a function is declared. This code block and statements inside the function is only executed when the function name is invoked.
*/
sayHello();

// undeclaredFunction(); // you cannot invoke/call a function that is not yet declared. this will result in an error

// [SECTION] Function Naming Conventions

// 1. Function names shoud be descriptive of their tasks/purpose. 
// Function names are case-sensitive. The cameCase approach is recommended way of declaring function names
function getCourses() {
	let courses = ["HTML", "CSS", "Javascript"];
	console.log(courses);
}

getCourses();

function displayCarInfo() {
	console.log("Brand: Toyota\nType: Sedan\nPrice: 1500000");
}

displayCarInfo();

// 2. Avoid generic names to avoid confusion within our code
function get() {
	let name = "Rachel";
	console.log(name);
}

get();

// 3. Avoid pointless and inappropriate function names
function foo() {
	console.log(25 * 5);
}

foo();

// [SECTION] Function Expression
/*
	- functions are stored in a variable. They are typically created as part of an expression.
*/

let funcExpression = function funcName() {
	console.log("Hello from the other side!");
}

// this function will be invoked using the variable name followed by the parentheses
funcExpression();

// funcName(); // this will result in an error because function names are not used for invocation in function expression

// anonymous function - functions without a name
let varFunction = function() {
	console.log("Hello Again, It's Me!");
}

varFunction();

// [SECTION] Function Declaration vs Function Expression

// Function declarations can be hoisted as long as the function is declared in the program
// hoisted - the statements are automatically moved to the top of the code
declaredFunction();

function declaredFunction() {
	console.log("Hello from declaredFunction();");
}

declaredFunction();

// function expression cannot be hoisted and must be declared first before invocation
// variableFunction();

let variableFunction = function() {
	console.log("Hello from variableFunction();");
}

variableFunction();

// You cannot reassign a function directly to a new function declaration. however, you can change the behaviour of thr function during the excution
declaredFunction = function() {
	console.log("Updated declaredFunction();");
}

declaredFunction();

// you can reassign a function dirrectly to a new function expression
variableFunction = function() {
	console.log("Updated variableFunction();");
}

variableFunction();

const constFunction = function() {
	console.log("Hello from constFunction();");
}

constFunction();

// We cannot reassign a function expression that is initialized with const
// constFunction = function() {
// 	console.log("Updated constFunction();");
// }

constFunction();

// [SECTION] Understanding scope in JavaScript
/*
	Scope - accessibility/visibility of the variables within our program
*/

// 1. Global Scope - variables that can be accessed anywhere in the program
const globalVariable = "I am a global variable";

function globalFunction() {
	console.log(globalVariable);
}

globalFunction();
console.log(globalVariable);

// 2. Local Scope
function localFunction() {
	// Function Local Scope - these are variables that can only be accessed within the function
	const localVariable = "I am a local variable";
	console.log(localVariable);
}

localFunction();
// console.log(localVariable); // this will return an error because the localVariable cannot be used/called outside of the localFunction()

{
	// Block Local Scope - these are variables that can only be accessed inside the code block
	const blockVariable = "I am a block variable";
	console.log(blockVariable);
}

// console.log(blockVariable); // this will return an error because you can only access blockVariable inside the {}

// [SECTION] Return Statement
/*
	- the "return" statement allos us to output a value from a function to be passed to the block of code that was invoked
*/

function returnFullName() {

	return "Jeffrey" + " " + "Bezos";
	// statements after the "return" will not be executed by the program
	console.log("This message is invisible...");
	let sum = 5 + 5; 
}

// we have to store the function return value in the variable and then output in teh console
let fullName = returnFullName(); // let fullName = "Jeffrey Bezos";
console.log(fullName);

function returnFullAddress() {

	// you can also stora a variable inside the function
	let fullAddress = {
		street: "403 Bonifacio Street",
		city: "Quezon City",
		province: "Metro Manila"
	}

	// return the variable
	return fullAddress;
}

/*
console.log ({
	street: "403 Bonifacio Street",
	city: "Quezon City",
	province: "Metro Manila"
})
*/
// you can invoke the function directly inside of console.log()
console.log(returnFullAddress());

// when a function only has console.log() to display it's result, it will return an undefined value instead
function printPlayerInfo() {
	console.log("Username: " + "white_knight");
	console.log("Level: " + 95);
	console.log("Job: " + "Paladin");
}

let user1 = printPlayerInfo(); // let user1 = undefined;
console.log(user1);

// you can return almost any type of data from a function
function returnSumOf5and10() {
	return 5 + 10;
}

let sumof5and10 = returnSumOf5and10(); // let sumOf5and10 = 15;
console.log(sumof5and10);

let total = 100 + returnSumOf5and10(); // let total = 100 + 15 = 115;
console.log(total);

function getGuildMembers() {
	return ["white_knight","healer2000","masterThief100","andrewthehero","ladylady99"];
}

// not strong the value in a variable and invoking it directly will not excute the program
console.log(getGuildMembers());