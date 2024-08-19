let str = "ritik";
let str1 = "";
for (let i = 0; i < str.length; i++) {
  str1 += i % 2 == 0 ? str[i].toUpperCase() : str[i].toLowerCase();
}
console.log(str1);
