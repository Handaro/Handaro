
 /*
    1. Create a function called addNum which will be able to add two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the addition.
*/
            function addNum(num1, num2) {
            // Add two numbers and return the result
            return num1 + num2;
            }

            // Example usage
            let result = addNum(5, 15);
            console.log("The result of adding 5 and 15 is:"); // Log the message first
            console.log(result); // Log the result separately

       
 /*  2. Create a function called subNum which will be able to subtract two numbers.
        - Numbers must be provided as arguments.
        - Return the result of subtraction.
*/
        function subNum(num1, num2) {
            // Subtract num2 from num1 and return the result
            return num1 - num2;
        }

        // Example usage
         result = subNum(20, 5);
        console.log("The result of subtracting 5 from 20 is:"); // Log the message first
        console.log(result); // Log the result separately
        


/*
    3. Create a function called multiplyNum which will be able to multiply two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the multiplication.
*/
        function multiplyNum(num1, num2) {
            // Multiply num1 by num2 and return the result
            return num1 * num2;
        }

        // Example usage
         result = multiplyNum(50, 10);
        console.log("The result of multiplying 50 and 10 is:"); // Log the message first
        console.log(result); // Log the result separately




/*
    4. Create a function divideNum which will be able to divide two numbers.
        - Numbers must be provided as arguments.
        - Return the result of the division.
*/
        function divideNum(num1, num2) {
            // Divide num1 by num2 and return the result
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        }

        // Example usage
         result = divideNum(50, 10);
        console.log("The result of dividing 50 by 10 is:"); // Log the message first
        console.log(result); // Log the result separately




/*5. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
        - a number should be provided as an argument.
        - look up the formula for calculating the area of a circle with a provided/given radius.
        - look up the use of the exponent operator.
        - return the result of the area calculation.
*/
        function getCircleArea(radius) {
            // Check if the radius is a positive number
            if (radius < 0) {
                return "Error: Radius cannot be negative.";
            }

            const pi = Math.PI;
            const area = pi * (radius ** 2); // Using the exponent operator to square the radius
            return area.toFixed(2); // Return the result rounded to two decimal places
        }

        // Example usage with a radius that yields an area close to 706.86
        const radius = 15; // Adjusted radius to achieve the desired area
         result = getCircleArea(radius);
        console.log(`The area of a circle with radius ${radius} is:`); // Log the message first
        console.log(result); // Log the result separately



/* 6. Create a function called getAverage which will be able to get total average of four numbers.
        - 4 numbers should be provided as an argument.
        - look up the formula for calculating the average of numbers.
        - return the result of the average calculation.
*/
    function getAverage(num1, num2, num3, num4) {
    // Calculate the average of the four numbers
    const total = num1 + num2 + num3 + num4; // Sum of the numbers
    const average = total / 4; // Average calculation
    return average; // Return the average
}

    // Example usage with the numbers 20, 40, 60, and 80
    result = getAverage(20, 40, 60, 80);
    console.log("The average of 20, 40, 60, and 80 is:"); // Log the message first
    console.log(result); // Log the result separately



/* 
    7. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
        - this function should take 2 numbers as an argument, your score and the total score.
        - First, get the percentage of your score against the total. You can look up the formula to get percentage.
        - Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
        - return the value of the variable isPassed.
        - This function should return a boolean.
*/
        function checkIfPassed(score, total) {
        // Calculate the percentage
        const percentage = (score / total) * 100; // Formula for percentage

        // Check if the percentage is greater than 75
        const isPassed = percentage > 75; // Save the comparison result

        return isPassed; // Return the boolean value
    }

        // Example usage with a score of 38 out of 50
         result = checkIfPassed(38, 50);
        console.log("Is a score of 38 out of 50 a passing score?"); // Log the message first
        console.log(result); // Log the result separately


/* 
    8. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
        - Check syntax of the following code.
        - Check if value is returned.
        - Check the parameters and arguments
*/


    function register(firstname, lastname, email, password, mobileNum) { // Changed 'firstname' and 'lastname' to 'firstName' and 'lastName'
        return {

            firstname: firstname,  // Changed from 'firstname' to 'firstName'
            lastname: lastname,       // Changed 'lname' to 'lastName'
            email: email,
            password: password,    // Added 'password' parameter
            mobileNum: mobileNum   // Changed 'mobileNo' to 'mobileNum'
     };
    }

    let newUser = register("Lilo", "Pelekai", "lilostitch@gmail.com", "liloohana1234", "09276612409");
    console.log(newUser);  // Fixed from 'console.log()newUser;' to 'console.log(newUser);'
    
   function createProduct(productName, price, quantity) { // Changed 'name' to 'productName'

    return {
        name: productName,  // This was correct, just ensuring clarity
        price: price,
        quantity: quantity   // Changed 'quantity quantity' to 'quantity: quantity'

        };

    }
    
    let newProduct = createProduct("Chocolate Bar", 200, 50); // Changed from 'createProduct()' to 'newProduct'
    console.log(newProduct);  // Fixed to log the correct product


    function createTeamArr(member1, member2, member3, member4, member5) { // Changed second 'member2' to 'member3' and added 'member5'

    return [member1, member2, member3, member4, member5]; // Fixed to correctly return an array of all members
}
    let newTeam = createTeamArr("Eugene","Dennis","Alfred","Vincent","Jeremiah");
    console.log(newTeam);


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        addNum: typeof addNum !== 'undefined' ? addNum : null,
        subNum: typeof subNum !== 'undefined' ? subNum : null,
        multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
        divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
        getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
        getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
        checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,
        register: typeof register !== 'undefined' ? register : null,
        createProduct: typeof createProduct !== 'undefined' ? createProduct : null,
        createTeamArr: typeof createTeamArr !== 'undefined' ? createTeamArr : null

    }
} catch(err){

}