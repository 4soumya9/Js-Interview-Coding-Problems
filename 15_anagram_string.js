function anagrammm(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frq = {};

  for (let count of str1) {
    frq[count] = (frq[count] || 0) + 1;
  }

  for (let val of str2) {
    if (frq[val]) {
      frq[val] -= 1;
    } else {
      return false;
    }
  }
  return true;
}


 console.log(anagrammm('anagram','naggaram'))