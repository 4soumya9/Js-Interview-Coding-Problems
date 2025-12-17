// sortByCharFrequency("banana")); // "aaannb"
function sortByCharFrequency(str) {
  let freqMap = new Map();

  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  
  const sortedArr = Array.from(freqMap).sort((a, b) => b[1] - a[1]);
  let result = "";
  // console.log(sortedArr);
  for (let [char, freq] of sortedArr) {
    result += char.repeat(freq);
    // result += char;
  }
  return result;
}

console.log(sortByCharFrequency("banana"));
