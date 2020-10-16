/**
 * Task
    Given an array of numbers and an index, return the index of the least number larger 
    than the element at the given index, or -1 if there is no such index 
    ( or, where applicable, Nothing or a similarly empty value ).

  Notes
    Multiple correct answers may be possible. In this case, return any one of them.
    The given index will be inside the given array.
    The given array will, therefore, never be empty.
 * 
 */

// 1. collect all numbers that are bigger
// 2. find the least number of them
// 3. find index of the least number

function leastLarger(a, i) {
  const biggerNumbers = a.filter((el) => el > a[i]);
  
  if (biggerNumbers.length === 0) return -1;

  let minNumber = biggerNumbers[0];

  biggerNumbers.forEach((element) => {
    minNumber = element < minNumber ? element : minNumber;
  });
  
  return a.indexOf(minNumber);
}

// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
console.log(leastLarger([4, 1, 3, 5, 6], 0));
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ))
