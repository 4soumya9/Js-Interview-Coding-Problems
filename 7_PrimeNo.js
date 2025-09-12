//check it is prime or not

function prime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(8));

/*A prime number is a natural number greater than 1 that has exactly two factors:

1

Itself

That means a prime number can only be divided evenly (without remainder) by 1 and the number itself.

✅ Examples of prime numbers:

2, 3, 5, 7, 11, 13, 17, 19…*/
