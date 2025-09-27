function isOnlyDigit(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char < '0' || char > '9') {
      return false;
    }
  }
  return true;
}

console.log(isOnlyDigit("12345a"));

// '0' (string) vs 0 (number)
// console.log('0' === 0);  // false (different types)
// console.log('0' == 0);   // true (because JS converts '0' to number before comparing)