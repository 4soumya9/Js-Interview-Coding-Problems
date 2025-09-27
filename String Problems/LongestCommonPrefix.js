function longestCommonPrefix(strs) {
  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];
  let result = "";

  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      return result;
    }

    result += first[i];
  }
  return result;
}

str = ["flowers", "flow", "fly", "flight"];
console.log(longestCommonPrefix(str));
// str = ["dog" , "cat" , "animal", "monkey" ]
