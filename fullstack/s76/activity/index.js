// Question #1: Create a program that calculate the total order amount. 
// Input should be an array, if not an array, return undefined. 

function calculateTotalAmount(orderAmounts) {
    if (!Array.isArray(orderAmounts)) {
        return undefined;
    }
    return orderAmounts.reduce((total, amount) => {
        if (typeof amount !== 'number') {
            return total; 
        }
        return total + amount;
    }, 0);
}

// Question #2: Create a program that takes an array of blog post titles and a keyword. 
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

function filterTitlesByKeyword(titles, keyword) {
    if (!Array.isArray(titles) || typeof keyword !== 'string') {
        return undefined;
    }

    return titles.filter(title => title.toLowerCase().includes(keyword.toLowerCase()));
}


// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

function formatUsernames(usernames) {
    if (!Array.isArray(usernames)) {
        return undefined;
    }

    return usernames.map(username => {
        if (typeof username !== 'string') {
            return undefined; 
        }
     
        const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
        return `User: ${capitalizedUsername}`;
    }).filter(Boolean); 
}

// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inputs are arrays and contain only integers, if not return undefined

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {

    if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2)) {
        return undefined;
    }

    const isValidArray = (arr) => arr.every(item => Number.isInteger(item));
    
    if (!isValidArray(datesWarehouse1) || !isValidArray(datesWarehouse2)) {
        return undefined;
    }

    const mergedDates = [...new Set([...datesWarehouse1, ...datesWarehouse2])];

    return mergedDates.sort((a, b) => a - b);
}



// Question #5: Develop a program that removes all scores that are below a certain threshold. 
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places. 
// If after filtering there are no scores left or the input is invalid, return undefined

function removeLowScoresAndCalculateAverage(scores, threshold) {
    if (!Array.isArray(scores) || typeof threshold !== 'number') {
        return undefined;
    }

    if (!scores.every(Number.isInteger)) {
        return undefined;
    }

    const filteredScores = scores.filter(score => score >= threshold);

    if (filteredScores.length === 0) {
        return undefined;
    }

    const average = filteredScores.reduce((sum, score) => sum + score, 0) / filteredScores.length;
    return parseFloat(average.toFixed(2));
}


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		calculateTotalAmount: typeof calculateTotalAmount !== 'undefined' ? calculateTotalAmount : null,
		filterTitlesByKeyword: typeof filterTitlesByKeyword !== 'undefined' ? filterTitlesByKeyword : null,
		formatUsernames: typeof formatUsernames !== 'undefined' ? formatUsernames : null,
		optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== 'undefined' ? optimizeDeliverySchedule : null,
		removeLowScoresAndCalculateAverage: typeof removeLowScoresAndCalculateAverage !== 'undefined' ? removeLowScoresAndCalculateAverage : null,
	}
} catch(err){

}


