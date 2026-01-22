const fs = require('fs');

// Read file as text
const content = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

const numbers = content.split('\n');

// Func to calculate the sum of all numbers
function calcSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]) || 0; // Converts string into numbers
    }
    
    return sum;
}

// Func to find highest number
function calcHigh(arr) {
    let highest = parseInt(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        const current = parseInt(arr[i]);

        if (current > highest) {
            highest = current;
        }
    }

    return highest;
}

// Func to find lowest number
function calcLow(arr) {
    let lowest = parseInt(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        const current = parseInt(arr[i]);

        if (current < lowest) {
            lowest = current;
        }
    }

    return lowest;
}

// Func to calculate the average
function calcAvg(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        sum += num; // add number to total
        count++; // add 1 to the count
    }
    
    return Number((sum / count).toFixed(2)); // returns the average & round to 2 decimals
}

// Func testing

if (require.main === module){
    console.log('Sum:', calcSum(numbers));
    console.log('Highest #:', calcHigh(numbers));
    console.log('Lowest #:', calcLow(numbers));
    console.log('Average:', calcAvg(numbers));
}

module.exports = {
    calcSum,
    calcHigh,
    calcLow,
    calcAvg
}