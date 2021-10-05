// const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// // const isTheDinnerVegan = food => {
// //   let test = food.every()
// // }

// let test = dinner.forEach(item => console.log(item.source));
// console.log(test)

// Write your code here:

const isTheDinnerVegan = food => {
  let veganTest = food.every(item => item.source === 'plant');
  return veganTest;
}




// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

