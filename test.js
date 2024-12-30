// test.js
const add = require('./app');

// // Original test
// test('adds 1 + 2 to equal 100', () => {
//   expect(add(1, 2)).toBe(100);  // This will fail
// });

// Add more tests
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);  // Correct test after bug fix
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);  // Edge case
});

test('adds -1 + 2 to equal 1', () => {
  expect(add(-1, 2)).toBe(1);  // Negative number case
});

test('adds 1000 + 2000 to equal 3000', () => {
  expect(add(1000, 2000)).toBe(3000);  // Large numbers case
});
