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
