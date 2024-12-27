// test.js
const add = require('./app');

test('adds 1 + 2 to equal 100', () => {  // Force a failure by expecting an impossible result
  expect(add(1, 2)).toBe(100);  // This will fail because the sum is 3, not 100
});
