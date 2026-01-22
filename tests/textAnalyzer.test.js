const textAnalyzer = require('../src/textAnalyzer');

describe('Text Analyzer Unit Tests', () => {

    test('counts total words correctly', () => {
        const lines = [
            "This is a test",
            "Unit tests are important"
        ];

        const result = textAnalyzer.totalWords(lines);
        expect(result).toBe(8);
    });

    test('totalWords returns 0 for empty array', () => {
        const result = textAnalyzer.totalWords([]);
        expect(result).toBe(0);
    });

    test('finds the longest word', () => {
        const lines = [
            "Short words only",
            "But sophistication stands out"
        ];

        const result = textAnalyzer.longestWord(lines);
        expect(result).toBe("sophistication");
    });

    test('longestWord ignores punctuation', () => {
        const lines = [
            "Hello, world!",
            "Testing..."
        ];

        const result = textAnalyzer.longestWord(lines);
        expect(result).toBe("Testing");
    });

    test('counts total lines', () => {
        const lines = [
            "Line one",
            "Line two",
            "Line three"
        ];

        const result = textAnalyzer.totalLines(lines);
        expect(result).toBe(3);
    });

    test('totalLines returns 0 for empty input', () => {
        const result = textAnalyzer.totalLines([]);
        expect(result).toBe(0);
    });
});