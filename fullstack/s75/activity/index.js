// Question #1: Create a program to check if a given string is a palindrome or not. 
// Add validation, if the argument is not a string, return undefined. 
// Palindrome words should be 3 characters and up.

function isPalindrome(string) {
    if (typeof string !== 'string') return undefined;

    if (string.length < 3) return undefined;
    
    const normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    return normalizedString === normalizedString.split('').reverse().join('');
}


// Question #2: Create a program that checks an isogram. 
// An isogram is a word where there are no repeating letters.
// The function should disregard text casing before doing anything else.
// If the function finds a repeating letter, return false. Otherwise, return true.

function isIsogram(text) {
    if (typeof text !== 'string') return undefined;
    
    const normalizedText = text.toLowerCase();
    
    const letterSet = new Set();
    
    for (let letter of normalizedText) {
        if (letterSet.has(letter)) return false;
        letterSet.add(letter);
    }
    
    return true;
}

// Question #3: Create a program to determine if a given year is a leap year. 
// The program should check if the input is a positive integer representing a year. If the input is not a valid year (i.e., not a positive integer), the program should return undefined.

function isLeapYear(year) {
    if (!Number.isInteger(year) || year <= 0) return undefined;
    
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Question #4: Create a program that checks the age to give the proper price 
// Return undefined for people aged below 13.
// Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
// Return the rounded off price for people aged 22 to 64.
// The returned value should be a string.

function purchase(age, price) {
    if (typeof age !== 'number' || typeof price !== 'number' || age < 13) return undefined;

    if (age >= 13 && age <= 21 || age >= 65) {
        return (price * 0.8).toFixed(2); 
    }
    return price.toFixed(2);  
}
// Question #5: Develop a program that calculates the frequency of a specific letter's appearance within a given sentence.
// Check first whether the letter is a single character.
// If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
// If letter is invalid, return undefined.

function countLetter(letter, sentence) {
    if (typeof letter !== 'string' || letter.length !== 1) {
        return "Invalid letter input";
    }
    
    if (typeof sentence !== 'string' || sentence.length <= 1) {
        return "Invalid sentence input";
    }

    const normalizedLetter = letter.toLowerCase();
    const normalizedSentence = sentence.toLowerCase();
    
    let count = 0;
    for (let char of normalizedSentence) {
        if (char === normalizedLetter) count++;
    }
    
    return count === 0 ? undefined : count;
}



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		isPalindrome: typeof isPalindrome !== 'undefined' ? isPalindrome : null,
		isIsogram: typeof isIsogram !== 'undefined' ? isIsogram : null,
		isLeapYear: typeof isLeapYear !== 'undefined' ? isLeapYear : null,
		purchase: typeof purchase !== 'undefined' ? purchase : null,
		countLetter: typeof countLetter !== 'undefined' ? countLetter : null,
	}
} catch(err){

}