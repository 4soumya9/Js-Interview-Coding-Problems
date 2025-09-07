// Ques 18: Given a string, write a javascript function to count the
// occurrences of each character in the string.

function countCharacters(str) {
  const charCount = {};
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const char = str[i];

    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const result = countCharacters("heelallnn");
console.log(result);
