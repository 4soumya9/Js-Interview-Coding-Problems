// Count the Number of Vowels in a String
// Write a function to count vowels (a, e, i, o, u) in a string.
// Example:
// Input: "javascript"
// Output: 3

// function count(str) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   //   let strr = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str.charAt(i))) {
//       count++;
//     }
//   }
//   return count;
// }

// let str = "javasIcript";
// console.log(count(str));

// Vowel Replacement with Numbers in JavaScript
// Input: "Hello World"

// Output: "H5ll15 W15rld"
// (H unchanged, e→5, l unchanged, l unchanged, o→15; space; W unchanged, o→15, r unchanged, l unchanged, d unchanged)

// Ques:3->
// Replace All Vowels with Asterisks
// Write a function that replaces every vowel in a string with an asterisk (*).
// Example:
// Input: "hello world"
// Output: "h*ll* w*rld"

function replaceWithAstrix(str) {
  let result = "";
  let vowels = "AEIOUaeiou";
  for (let char of str) {
    if (vowels.includes(char)) {
      result += "*";
    } else {
      result += char;
    }
  }
  return result;
}

let strs= 'hello world';

console.log(replaceWithAstrix(strs));
