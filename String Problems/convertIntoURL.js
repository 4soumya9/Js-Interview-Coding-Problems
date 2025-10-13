// URLify a given string (Replace spaces is %20)
// Input:  "React makes UI simple"
// Output: "React%20makes%20UI%20simple"

function toURL(str) {
  let op = str
    .trim()
    .split("")
    .map((char) => (char === " " ? "%20" : char))
    .join("");
  console.log(op);
}

const str = "   React makes UI simple";
toURL(str);

// Method 2:

//   let outputStr = str.replaceAll(" ", "%20");
//   console.log(outputStr);
// Input: "Geeks for Geeks"
// Output: Geeks%20for%20Geeks
