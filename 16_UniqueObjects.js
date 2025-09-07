/* 16. Write logic to get unique objects from below array ?
 I/P [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: 
"111111"}];
 O/P [{name: "sai"},{name:"Nang"}{name: "111111"}*/

function UniqueObjects(str) {
  const seen = new Set();
  const unique = str.filter((item) => {
    let key = `${item.name}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
  return unique;
}

const arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" }
];

console.log(UniqueObjects(arr));
