let ratio = require("./../ratio/index.js");
let factorial = require("./../factorial/index.js");
console.log(ratio);
console.log(factorial);
function ratioAndFactorial(num1, num2, num3) {
  let object = {
    ratio: ratio(num1, num2),
    factorial: factorial(num3),
  };
  return object;
}
module.exports = ratioAndFactorial;
