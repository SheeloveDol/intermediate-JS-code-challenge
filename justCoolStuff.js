// Write your code here:

// Returning things that are only common to both arrays using .filter() method and .includes() method
const justCoolStuff = (arr1, arr2) => {
  let results = [];
  results = arr1.filter(word => arr2.includes(word));
  return results;
  }

  





// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
