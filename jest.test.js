const functions = require('./jest');

// capitalize first letter of string test
test('capitalize first letter of word', () => {
  expect(functions.capitalize('brandon')).toEqual('Brandon');
});

// reverse string test
test('reverse string', () => {
  expect(functions.reverseString('larry')).toEqual('yrral');
});

// calculator test
test('add numbers', () => {
  expect(functions.calculator.add(3, 5)).toBe(8);
  expect(functions.calculator.add(56, 37)).not.toBe(8);
});

test('subtract numbers', () => {
  expect(functions.calculator.subtract(10, 5)).toBe(5);
  expect(functions.calculator.subtract(56, 37)).not.toBe(8);
});

test('multiply numbers', () => {
  expect(functions.calculator.multiply(3, 5)).toBe(15);
  expect(functions.calculator.multiply(56, 37)).not.toBe(8);
});

test('divide numbers', () => {
  expect(functions.calculator.divide(15, 3)).toBe(5);
  expect(functions.calculator.divide(56, 37)).not.toBe(8);
});

// caesar cipher
test('caesar cipher', () => {
  expect(functions.caesarCipher('abc', 2)).toEqual('cde');
});

// analyze array test
test('analyze', () => {
  expect(functions.analyzeArray([1, 17, 3, 4, 2, 6])).toStrictEqual({ average: 6, min: 1, max: 17, length: 6 });
});
