function reverse(str) {
  let revv = str.split("").reverse();
  return revv.join("");
}

console.log(reverse("hello"));
