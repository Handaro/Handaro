
/*
1. In the s22 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
 */

// console.log("Hello World");
console.log("Hello World");


/*
4. Research how to concatenate strings using + operator in Javascript. 
    - Create two variables called street and city.
        - Add the appropriate values.
    - Create a new variable called fullAdress
        - Concatenate the street and city variables and save it into the fullAddress variable
        - Log the full address to the console using the variable: "fullAddress"
        - Example: Timog Ave, Quezon City
*/

let street = "Timog Ave";
let city = "Quezon City";
let fullAddress = street + "," + " " + city;
console.log(fullAddress);

/*
5. Research how to combine text with Strings in Javascript
    - Create  variable named messageLog to store a message
        - Combine the string “i live in” and the fullAddress variable.
        - Log the message "I live in" and your full address to the console.
        - Example: I live in Timog Ave, Quezon City
*/

let messageLog = "I live in " + fullAddress;
console.log(messageLog);



/*
6. Research the use of the escape character in Javascript strings.
    - Create a variable called “sentenceWithEscape”.
        - In it, add a string with a sentence: “I'm learning JavaScript” , but use the escape character for the single quote using the variable. 
    - Create a variable called “sentenceWithoutEscape”.
        - In it, add a string with the same sentence that includes a single quote (') without using the escape character.
    - Log both strings to the console and observe the difference.
*/
// Using escape character
let sentenceWithEscape = "I'm learning JavaScript."
console.log(sentenceWithEscape);

// Without using escape character
let sentenceWithoutEscape = 'I\'m learning JavaScript.';
console.log(sentenceWithoutEscape);


/*
7. Research the use of the escape character in Javascript strings.
    - Create a paragraph variable and assign the following multi-line string to it:
		"JavaScript is a powerful programming language.
		It is used for web development, server-side scripting, and more.
		Learning JavaScript opens up many opportunities for developers."
    -  Log the result to the console.
*/

let paragraph = 
`JavaScript is a powerful programming language.
It is used for web development, server-side scripting, and more.
Learning JavaScript opens up many opportunities for developers.`;
console.log(paragraph);
    

/*
8. Research how to determine the data type of each variable.
	- Add the variables of different primitive data types: 
		- str = "Twice"
		- num = 27
		- bool = true
		- nul = null
		- undf = undefined
		- arr = ["Dahyun", "Chaeyoung", "Mina"]
		- obj = { twice: "Dahyun" }
	- Use the operator to determine the data type of each variable.
	- Log the result to the console.
*/

// Define variables of different types
let str = "Twice";
let num = 27;
let bool = true;
let nul = null;
let undf = undefined;
let arr = ["Dahyun", "Chaeyoung", "Mina"];
let obj = { twice: "Dahyun" };

// Log the data types
console.log(typeof str); 
console.log(typeof num); 
console.log(typeof bool); 
console.log(typeof nul); 
console.log(typeof undf); 
console.log(typeof arr); 
console.log(typeof obj); 

/*
9. Analyze different scenarios and write Javascript code to declare variables using let or const based on the given requirements.
	- Declare variables to store mathematical constants using the appropriate declaration.
	- Choose let or const considering whether the mathematical constants are fixed or may change.
		- pi = 3.14159
		- euler Number = 2.71828
		- current temperature = 25
		- product quantity in stock = 100
		- email = dahyun@gmail.com
		- user name = bhoxs Chae
	- log the result to the console.
*/
// const
const pi = 3.14159
const eulerNumber = 2.71828

// let
let currentTemperature = 25
let productQuantityInStock = 100
let email = "dahyun@gmail.com"
let userName = "bhoxs Chae"

//log
console.log(pi);
console.log(eulerNumber);
console.log(currentTemperature);
console.log(productQuantityInStock);
console.log(email);
console.log(userName);
/*
10. Create the following variables to store to the following user details:
    - Variable Name - Value Data Type:
        - firstName - String
        - lastName - String
        - age - Number
        - hobbies - Array
        - workAddress - Object

	- The hobbies array should contain at least 3 hobbies as Strings.
	- The work address object should contain the following key-value pairs:

		houseNumber: <value>
		street: <value>
		city: <value>
		state: <value>

	- Log the values of each variable to follow/mimic the output.
*/

	//Add your variables and console.log for objective 1 here:


let firstName = "John";
let lastName = "Smith";
let age = 30;
let hobbies = ['Biking', 'Mountain Climbing', 'Swimming'];
let workAddress = {
    houseNumber: '32',
    street: 'Washington',
    city: 'Lincoln',
    state: 'Nebraska'
};


console.log("firstName :", firstName);
console.log("lastName :", lastName);
console.log("age :", age);
console.log("hobbies :", hobbies);
console.log("workAddress :", workAddress);




/*			
11. Debugging Practice - Identify and implement the best practices of creating and using variables 
	   by avoiding errors and debugging the following codes:
			
		Note:
		Log the values of each variable to follow/mimic the output.
*/	

	let fullName = "Steve Rogers";
	console.log("My full name is: " + fullName);//write the declared variable fullname and replace the name in the log.

	let currentAge = 40; //true is not an Int but a boolean
	console.log("My current age is: " + currentAge);//Make sure of the complete or correct spelling or word.
	
	let friends = ["Tony","Bruce","Thor","Natasha","Clint","Nick"];//all strings should be in "" and followed by , if inside the arrays
	console.log("My Friends are: ")
	console.log(friends);

	let profile = {

		username: "captain_america", //add colon
		fullName: "Steve Rogers",//make sure of this ""
		age: 40,
		isActive: false 

	};
	console.log("My Full Profile: ")
	console.log(profile);

	let fullName2 = "Bucky Barnes";
	console.log("My bestfriend is: " + fullName2); //check always the declared var

	const lastLocation = "Arctic Ocean";
	// lastLocation = "Arctic Ocean"; // no need to delcared again
	console.log("I was found frozen in: " + lastLocation);


	//Do not modify
	//For exporting to test.js

	//All needed variables are listed here.
	//Error in checking may result if one of the following variables was not created or initialized.

	try {
		module.exports = {
		  street : typeof street !== 'undefined' ? street : null,
		  city: typeof city !== 'undefined' ? city : null,
		  fullAddress : typeof fullAddress !== 'undefined' ? fullAddress : null,
		  messageLog : typeof messageLog !== 'undefined' ? messageLog : null,
		  sentenceWithEscape : typeof sentenceWithEscape !== 'undefined' ? sentenceWithEscape : null,
		  sentenceWithoutEscape : typeof sentenceWithoutEscape !== 'undefined' ? sentenceWithoutEscape : null,
		  paragraph : typeof paragraph !== 'undefined' ? paragraph : null,
		  str : typeof str !== 'undefined' ? str : null,
		  num : typeof num !== 'undefined' ? num : null,
		  bool : typeof bool !== 'undefined' ? bool : null,
		  nul : typeof nul !== 'undefined' ? nul : null,
		  undf : typeof undf !== 'undefined' ? undf : null,
		  arr : typeof arr !== 'undefined' ? arr : null,
		  obj : typeof obj !== 'undefined' ? obj : null,
		  pi : typeof pi !== 'undefined' ? pi : null,
		  eulerNumber: typeof eulerNumber !== 'undefined' ? eulerNumber : null,
		  currentTemperature : typeof currentTemperature !== 'undefined' ? currentTemperature : null,
		  productQuantityInStock : typeof productQuantityInStock !== 'undefined' ? productQuantityInStock : null,
		  email : typeof email !== 'undefined' ? email : null,
		  userName : typeof userName !== 'undefined' ? userName : null,
		  firstName : typeof firstName !== 'undefined' ? firstName : null,
		  lastName : typeof lastName !== 'undefined' ? lastName : null,
		  age : typeof age !== 'undefined' ? age : null,
		  hobbies : typeof hobbies !== 'undefined' ? hobbies : null,
		  workAddress : typeof workAddress !== 'undefined' ? workAddress : null,
		  fullName : typeof fullName !== 'undefined' ? fullName : null,
		  currentAge : typeof currentAge !== 'undefined' ? currentAge : null,
		  friends : typeof friends !== 'undefined' ? friends : null,
		  profile : typeof profile !== 'undefined' ? profile : null,
		  fullName2 : typeof fullName2 !== 'undefined' ? fullName2 : null,
		  lastLocation : typeof lastLocation !== 'undefined' ? lastLocation : null,
		};
	  } catch (err) {}