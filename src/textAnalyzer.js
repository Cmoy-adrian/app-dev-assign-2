const fs = require('fs');

// Read file as text
function readFileLines(path) {
    const content = fs.readFileSync(path, 'utf8');
    return content.split('\n');
}

// Func to count number of words
function totalWords(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) { // Loops through arr
        const words = arr[i].trim().split(/\s+/); // Splits each line into individual words using regex syntax
        total += words.length; // Add number of words in line to total
    }

    return total;
}

// Func to find longest word
function longestWord(arr) {
    let longest = "";

    for (let i = 0; i < arr.length; i++) { // Loops through arr
        const words = arr[i].trim().split(/\s+/);

        for (let j = 0; j < words.length; j++) {
            // Remove punctuation
            const cleanWord = words[j].replace(/[^\w]/g, "");

            if (cleanWord.length > longest.length) {
                longest = cleanWord;
            }
        }
    }

    return longest;
}

// Func to find total lines
function totalLines(arr) {
    return arr.length;
}

// Func testing
const filePath_1 = "./data/quotes.txt"
const filePath_2 = "./data/sample-text.txt"

const file1_Lines = readFileLines(filePath_1)
const file2_Lines = readFileLines(filePath_2)

if (require.main === module){
    console.log('Quotes - Total Words:', totalWords(file1_Lines));
    console.log('Quotes - Longest Word:', longestWord(file1_Lines));
    console.log('Quotes -  Total Lines:', totalLines(file1_Lines));

    console.log('Sample Text - Total Words:', totalWords(file2_Lines));
    console.log('Sample Text - Longest Word:', longestWord(file2_Lines));
    console.log('Sample Text - Total Lines:', totalLines(file2_Lines));
}

module.exports = {
    totalWords,
    longestWord,
    totalLines
};