// // test.js
// const add = require('./app');

// test('adds 1 + 2 to equal 3', () => {
//   expect(add(1, 2)).toBe(3);
// });


// test.js
const add = require('./app');

test('adds 1 + 2 to equal 4', () => {  // Incorrect expected result
  expect(add(1, 2)).toBe(4);  // This will fail because 1 + 2 + 1 = 4
});
