function phoneNoMasking(number) {
  const num = number.toString();

  // getting last 4 digits
  const lastFour = num.slice(-4);

  // masked the rest
  const masked = "*".repeat(num.length - 4) + lastFour;
  return masked;
}

// for masking with bracket

function phoneMask(number) {
  let num = number.toString();

  let lastFour = num.slice(-4);
  //masked First six letter

  let firstSix = "*".repeat(6);

  // Format as (XXX) XXX-1234
  let format = `(${firstSix.slice(0, 3)}) ${firstSix.slice(3)} - ${lastFour}`;
  return format;
}

// console.log(phoneNoMasking("9876543210"));
console.log(phoneMask("9876543210"));

/*Use .repeat() to create the masked part

Use .slice() to optionally keep some characters visible

Can replace with "*" or "•" depending on UI design*/

// function maskPassword(password) {
//   let masked = "";
//   for (let i = 0; i < password.length; i++) {
//     masked += "*";
//   }
//   return masked;
// }

// function mask(password) {
//   return "*".repeat(password.length);
// }

// const password = "m123";
// // console.log(maskPassword(password));
// console.log(mask(password));
