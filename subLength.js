

// const subLength = (arg1, arg2) => {
//   let test = arg1.split('').keys();
//   console.log(test);
// }

/*
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
*/

// subLength('color', 'o');

// const testArray = [1, 2, 3, 4, 5, 6]
// const iter = testArray.keys();

// for (let i of iter) {
//   console.log(i)
// }
// console.log('');


// var pos = foo.indexOf("b");
// while(pos > -1) {
//     document.write(pos + "<br />");
//     pos = foo.indexOf("b", pos+1);
// }


// const thing = 'rnadomatic'; 
 
// let place = thing.indexOf('a');

// while (place > -1) {
//   console.log(place)
//   place = thing.indexOf('a', place+1)
// }


// Write function below

const subLength = (arg1, arg2) => {
  let repo = [];
  let pos = arg1.indexOf(arg2);

  //looping through to get all occurences
  while (pos > -1) {
    repo.push(pos);
    pos = arg1.indexOf(arg2, pos+1);
  };
// getting the length between occurences
  

//setting conditional for return
  if (repo.length < 2) {
    console.log(0);
  } else {
    let diff = repo.reduce((a, b) => (b - a) +1);
    console.log(diff);
  }
}

subLength('funny', 'n')

//? Alternative answer

// // Write function below
// const subLength = (str, char) => {
//   let charCount = 0;
//   let len = -1;
  
//   for (let i=0; i<str.length; i++) {
//     if (str[i] == char) {
//       charCount++;
//       if (charCount > 2) {
//         return 0;
//       }
//       if (len == -1) {
//         len = i;
//       } else {
//         len = i - len + 1
//       }
//     }
//   }
//   if (charCount < 2) {
//     return 0;
//   }

//   return len;
// };