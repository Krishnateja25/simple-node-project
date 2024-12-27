// test.js
const add = require('./app');

test('adds 1 + 1 to equal 3', () => {  // Force a failure by expecting an impossible result
  expect(add(1, 1)).toBe(3);  // This will fail because the sum is 3, not 100
});
