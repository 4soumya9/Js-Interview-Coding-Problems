function fibo(numTerms) {
  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    return [0];
  }

  const seq = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextSeq = seq[i - 1] + seq[i - 2];
    seq.push(nextSeq);
  }
  return seq;
}

const numTerms = 10;
const fibonacciSeries = fibo(numTerms);
console.log(fibonacciSeries);
