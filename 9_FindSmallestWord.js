function smallestWord(sentence) {
  let wordsArray = sentence.split(" ");
  let smallest = wordsArray[0];

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length < smallest.length) {
      smallest = wordsArray[i];
    }
  }
  return smallest;
}

console.log(smallestWord("Hi Iam Saikrishna Iam a UI Developeyyyyyr"));
