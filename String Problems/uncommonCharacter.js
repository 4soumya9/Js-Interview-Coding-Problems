// To find uncommon characters of two strings,
//  you need to identify the characters
// that appear in only one of the two strings — not in both.

// Input :
// str1 = "abcdef";
// str2 = "defgh";

// Output:
// abcgh

function uncommon(str1, str2) {
  let set1 = new Set(str1);
  let set2 = new Set(str2);
  let res = "";

  for (let char of set1) {
    if (!set2.has(char)) {
      res += char;
    }
  }

  for (let char of set2) {
    if (!set1.has(char)) {
      res += char;
    }
  }

  let ans = res.split("").sort().join("");
  return ans;
}

str1 = "abcdef";
str2 = "defgh";
console.log(uncommon(str1, str2));
