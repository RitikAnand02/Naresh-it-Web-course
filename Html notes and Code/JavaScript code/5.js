// wirte a function that return first and last letters of  use arrow function.

function strName(str) {
  return str[0] + str[str.length - 1].toUpperCase();
}
let result = strName("Ritik");
console.log(result);
