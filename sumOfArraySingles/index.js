/**
 * Task
   Given an array of numbers in which two numbers occur once and the rest occur only twice. 
   Your task will be to return the sum of the numbers that occur only once.

   For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
 */

function repeats(arr) {
  // 1. Build an array with numbers that occur only once
  // 2. Get the sum
  const occurOnceNumbers = [];

  arr.forEach((number, idx) => {
    const cloneArray = arr.slice();
    cloneArray.splice(idx, 1);

    if (cloneArray.indexOf(number) < 0) {
      occurOnceNumbers.push(number);
    }
  });

  return occurOnceNumbers.reduce((prev, acc) => prev + acc, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
