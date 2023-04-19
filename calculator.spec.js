/**
 * 1. Observe how we are naming the file. (*.spec.js is not rule but more of convention, same added to conf)
 * 2. describe, it, expect
 */

// Every file has test suite - its just a group of test
// 'describe' method provides this ability. Its globally available. 
describe('Calculator.js', function () {

  let calculator;
  beforeEach(function () {
      calculator = new Calculator();
  });

  // afterEach(function() {

  // });

  // Spec is expectation or group of expectations from code
  // We can use 'it' method to define spec.
  it('should add number to the total', function () {
    const calculator = new Calculator(); // Calculator() is available here ?
    calculator.add(5);

    // An expectation can be checked with 'expect'
    // We can have multiple expects within single spec, if all of them are true its a passing spec
    expect(calculator.total).toBe(5);
    // expect(calculator.total).toBe(15);
  });

  it('should subtract number from the total', function () {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    // An expectation can be checked with 'expect'
    expect(calculator.total).toBe(25);
  });


  // it('should add number to the total', function () {
  //   calculator.add(5);
  //   expect(calculator.total).toBe(5);
  // });

  // it('should subtract number from the total', function () {
  //   calculator.total = 30;
  //   calculator.subtract(5);
  //   expect(calculator.total).toBe(25);
  // });

  // How to assert error throwing
  // it('should should throw divide by zero error', function () {
  //   calculator.total = 30;
  //   expect(() => calculator.divide(0)).toThrowError('number cannot be zero')
  // });
});