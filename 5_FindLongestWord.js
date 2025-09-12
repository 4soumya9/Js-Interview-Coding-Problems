function findLongest(sentence) {
  let wordsArray = sentence.split(" ");
  let longWord = "";

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longWord.length) {
      longWord = wordsArray[i];
    }
  }
  return longWord;
}

// console.log(findLongest(sentence));
console.log(findLongest("Hi Iam Saikrishna Iam a UI Developeyyyyyr"));
