// Write your code here:
// Not allowed to use the built-in .map() method

const convertToBaby = arr => {
  let newArr = []
  arr.forEach(item => newArr.push('baby ' + item));
  return newArr;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

