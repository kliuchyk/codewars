/**
 * Task
  Given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
*/

const str = "Hello there I am Mike!";

function findShort(s) {
  let shortest;

  s.split(" ").forEach((word) => {
    if (!shortest) {
      shortest = word.length;
    } else if (word.length < shortest) {
      shortest = word.length;
    }
  });

  return shortest;
}
