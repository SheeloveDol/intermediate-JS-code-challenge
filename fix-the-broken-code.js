const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number

            // The error what that this was re-using 'i' as a variable again which was breaking the code and only returning the first item in the array
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
            
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]