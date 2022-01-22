const { multiply } = require('./../calculator.js');
describe('Multiply', () => {
  test('should divide two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should divide two floating point numbers correctly', () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
  });

  test('should throw an error when multiplying by 0', () => {
    expect(() => multiply(1, 0)).toThrow();
  });
});
