// Capitalizing every single world from the array

const shoutGreetings = arr => {
  return arr.map(word => word.toUpperCase())
}

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));