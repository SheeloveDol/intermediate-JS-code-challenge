const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
// I need to get a bit more understanding of how you can directly call the function like this.
const declineEverything = array => {
  array.forEach(politelyDecline);
}

declineEverything(veggies);


const acceptEverything = arr => {
  arr.forEach(item => console.log(`Ok, I guess I will eat some ${item}.`));
}

acceptEverything(veggies)