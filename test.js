// test.js
const add = require('./app');

test('adds 1 + 1 to equal 4', () => {  // Force a failure by expecting an impossible result
  expect(add(1, 1)).toBe(4);  // This will fail because the sum is 3, not 100
});
