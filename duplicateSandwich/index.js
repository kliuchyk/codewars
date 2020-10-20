/**
 * Task
   Given a list consisting of unique elements except for one thing that appears twice.
  Your task is to output a list of everything in-between both occurrences of this element in the list.

  Examples:
  [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
  ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
  [0, 0] => []
  [true, false, true] => [false]
  "example" => "xampl"
*/

function duplicateSandwich(a) {
  let arrResult = [];
  let isString;
  let valuesArray = [];

  if (typeof a === 'string') {
    valuesArray = a.split('');
    isString = true;
  } else {
    valuesArray = a;
  }

  valuesArray.forEach((item, idx, array) => {
    if (array.indexOf(item) !== idx) {
      const start = array.indexOf(item) + 1;
      arrResult = array.slice(start, idx);
    }
  });

  return isString ? arrResult.join('') : arrResult;
}
