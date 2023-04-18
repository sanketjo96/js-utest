/**
 * 1. beforeEach, afterEach
 */

describe('Calculator.js', function () {

    let calculator;
    // Create resources if you need them before every spec
    beforeEach(function () {
        calculator = new Calculator();
    });

    // Clean up resources after every spec
    afterEach(function() {

    });


    it('should add number to the total', function () {
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should subtract number from the total', function () {
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });
});