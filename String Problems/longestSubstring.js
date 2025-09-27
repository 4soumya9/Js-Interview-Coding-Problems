function longestSubstring(str) {
  let start = 0;

  let maxLength = 0;
  let seen = new Set();

  for (let end = 0; end < str.length; end++) {
    while (seen.has(str[end])) {
      seen.delete(str[start]);
      start++;
    }
    seen.add(str[end]);
    // maxLength = Math.max(maxLength, end - start + 1);
    // checking the longest substring or not
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxSubString = str.slice(start, end + 1);
    }
  }

  return { maxLength, maxSubString };
}

console.log(longestSubstring("abcabcbb"));

// The dollar sign ($) with curly braces (${}) is only needed when you are writing inside a template literal (a string wrapped in backticks ` `).
// i.e.let name = "Soumyajit";
// console.log(`Hello ${name}`);
// // Output: Hello Soumyajit

// Use ${} → only inside template literals.

// No $ → when returning variables or objects directly.
