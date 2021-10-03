// Write your code here:

// Reversing an array withtou using built-in method
const reverseArray = arr => {
  let result = [];
  while (arr.length) {
    result.push(arr.pop());
  }
  return result;
}






// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



