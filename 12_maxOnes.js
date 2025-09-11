// findConsecutive ones([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]);
 // output: 3

function maxones(arr) {
  let currentCount = 0;
  let maxCount = 0;

  for (let val of arr) {
    if (val === 1) {
      currentCount += 1;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}

console.log(maxones([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]));
