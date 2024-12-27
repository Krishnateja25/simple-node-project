// // app.js
// function add(a, b) {
//     return a + b;
//   }
  
//   module.exports = add;

  // app.js
function add(a, b) {
    // Changing logic: return incorrect sum
    return a + b + 1;  // Intentional bug: adding 1 to the sum
  }
  
  module.exports = add;
  
  