console.log("Hello World!")

// [SECTION] Arithmetic Operators
let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

// [SECTION] Assignment Operator (=)
// the assignment operator assigns the value of the right operand to a variable
let assingmentNumber = 8;

// Addition Assignment Operator (+=)
// the addition assignment operator adds the value of the right operand to a variable and assignts the result to the variable

assingmentNumber = assingmentNumber + 2;
console.log("Result of addition assignment operator: " + assingmentNumber);

// Shorthand for assignmentNumber = assignmentNumber + 2
assingmentNumber += 2;
console.log("Result of addition assignment operator: " + assingmentNumber);

// Subtraction/Multiplication/Division Assignment Operator (-=,*=,/=)
assingmentNumber -= 2;
console.log("Result of subrtraction assignment operator: " + assingmentNumber);

// Multiple Operators and Parentheses
/*
	-When multiple operators are applied to a single statement, it follows the PEMDAS (Parenthesis, Exponents, Multiplication, Division, Addition and Subtraction) rule
*/

let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation: " + mdas);

let pemdas = 1 + (2 - 3) * (4 / 5);
console.log("Result of Pemdas operation: " + pemdas);

pemdas = (1 + (2 - 3)) * (4 / 5);
console.log("Result of Pemdas operation: " + pemdas);

// Increment and Decrement
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied to
let z = 1;

// The value of z is added by a value of one before returning the value and storing it in the variable
let increment = ++z;
console.log("Result of pre-increment: " + increment);
// The value of "z" was also increased even though we didn't implicitly specify any value reassignment
console.log("Result of pre-increment: " + z); 

// The value of z is returned and stored in the variable increment then the value of is increased by one
increment = z++;
// the value of z is at before it was incremented
console.log("Result of post-increment: " + increment)
console.log("Result of post-increment: " + z); 


let decrement = --z;
console.log("Result of pre-decrement: " + increment);
console.log("Result of pre-decrement: " + z); 


decrement = z--;
console.log("Result of post-decrement: " + increment)
console.log("Result of post-decrement: " + z); 


// [SECTION] Type Coercion

/*
    - Type coercion is the automatic or implicit conversion of values from one data type to another
    - This happens when operations are performed on different data types that would normally not be possible and yield irregular results
    - Values are automatically converted from one data type to another in order to resolve operations
*/

let numA = "10";
let numB = 12;

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);


/* 
    - The result is a number
    - This can be proven in the console by looking at the color of the text displayed
    - Blue text means that the output returned is a number data type
*/
let numC = 16;
let numD = 14;
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

/* 
    - The result is a number
    - The boolean "true" is also associated with the value of 1
*/
let numE = true + 1;
console.log(numE);

/* 
    - The result is a number
    - The boolean "false" is also associated with the value of 0
*/
let numF = false + 1;
console.log(numF);

// [SECTION] Equality Operator(==)
/* 
    - Checks whether the operands are equal/have the same content
    - Attempts to CONVERT AND COMPARE operands of different data types
    - Returns a boolean value
*/

let juan = "juan";//this will be used for the comparison operator

// Equality Operator
console.log(1 == 1);
console.log(1 == 2)
console.log(1 == '1');
console.log(0 == false);
console.log('juan' == 'juan');
console.log('juan' == juan);

// Inequality operator
/* 
    - Checks whether the operands are not equal/have different content
    - Attempts to CONVERT AND COMPARE operands of different data types
*/

console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);

// Strict Equality Operator
/* 
    - Checks whether the operands are equal/have the same content
    - Also COMPARES the data types of 2 values
    - JavaScript is a loosely typed language meaning that values of different data types can be stored in variables
    - In combination with type coercion, this sometimes creates problems within our code (e.g. Java, Typescript)
    - Some programming languages require the developers to explicitly define the data type stored in variables to prevent this from happening
    - Strict equality operators are better to use in most cases to ensure that data types provided are correct
*/

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');
console.log('juan' === juan);

// Strict Inequality Operator
/* 
    - Checks whether the operands are not equal/have the same content
    - Also COMPARES the data types of 2 values
*/

console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);
console.log('juan' !== 'juan');
console.log('juan' !== juan);

// [SECTION] Relational Operators
// Some comparison operators check whether one value is greater or less than to the other value

let a = 50;
let b = 65;

// GT or Greater than(>)
let isGreaterThan = a > b;
// LT or Less Than Operator
let isLessThan = a < b;
// GTE or Greater Than or Equal Operator
let isGTorEqual = a >=b;
// LTE or Less Than or Equal to
let isLTorEqual = a <= b;

//Like our equality comparison operators, relational operators also return boolean which we can save in a variable or use in a conditional statement.
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual)

let numStr = "30";
console.log(a > numStr);
console.log(b <= numStr);

let str = 'twenty';
console.log(b >= str);//false
//Since the string is not numeric, The string was converted to a number and it 
//resulted to NaN. 65 is not greater than NaN.

// [SECTION] Logical Operators
let isLegalAge = true;
let isRegistered = false;

// Logical and operator (&& - Double Ampersand)
// Returns true if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirementsMet);

// Logical or operator(|| - Double pipe)
// Returns true if one of the operands are true
let someRequirementsMet = isLegalAge || isRegistered
console.log("Result of logical OR operator: " + someRequirementsMet);

//Logical Not operator (! - Exclamation Point); 
//Returns the opposite value
let requirementsMet = !isRegistered;
console.log("Result of logical NOT operator: " + someRequirementsMet); 
