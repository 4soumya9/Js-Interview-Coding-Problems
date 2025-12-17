// Expand Encoded String
// Example:
// Input: "3a2b4c"
// Output: "aaabbcccc"

function encode(str) {
  let result='';
  let num='';
  for (let char of str) {
    if (!isNaN(char)) {
      num += char;
    } else {
      result += char.repeat(Number(num));
      num = "";
    }
  }
  return result;
}

console.log(encode("10a3Z4c"));
