const numberProcessor = require("../src/numberProcessor");

describe("Number Processor Unit Tests", () => {

    test("calculates the sum of numbers correctly", () => {
        const numbers = ["80", "90", "100"];

        const result = numberProcessor.calcSum(numbers);
        expect(result).toBe(270);
    });

    test("sum returns 0 for empty input", () => {
        const result = numberProcessor.calcSum([]);
        expect(result).toBe(0);
    });

    test("ignores non-numeric values", () => {
        const numbers = ["80", "", "abc", "90"];

        const result = numberProcessor.calcSum(numbers);
        expect(result).toBe(170);
    });

    test("finds the highest number", () => {
        const numbers = ["72", "96", "88", "90"];

        const result = numberProcessor.calcHigh(numbers);
        expect(result).toBe(96);
    });

    test("finds the lowest number", () => {
        const numbers = ["73", "85", "90", "100"];

        const result = numberProcessor.calcLow(numbers);
        expect(result).toBe(73);
    });

    test("calculates the average correctly", () => {
        const numbers = ["80", "90", "100"];

        const result = numberProcessor.calcAvg(numbers);
        expect(result).toBe(90);
    });

    test("average rounds correctly to two decimals", () => {
        const numbers = ["85", "86", "89"];

        const result = numberProcessor.calcAvg(numbers);
        expect(result).toBe(86.67);
    });
});