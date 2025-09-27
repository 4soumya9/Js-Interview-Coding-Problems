/*Capitalize the First Letter of Each Word
Convert the first letter of each word in a string to uppercase.
Example:
Input: "hello world"
Output: "Hello World"*/

function cap(str) {
  //   let result = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

let str = "hello world";
console.log(cap(str));
