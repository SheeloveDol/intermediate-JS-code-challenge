// Write function below
// let array = [];
// let factored;
// const factorial = num => {
//   for (let i = num; i > 0; i--) {
//    array.push(i);
//   };
//    console.log(factored = array.reduce((a, b) => a * b));
  
// }

// factorial(1)

// A simpler way:

const factorial = num => {
  let constant = 1;
  for (let i = num; i > 0; i--) {
    constant *= i;
  }
  return constant
}