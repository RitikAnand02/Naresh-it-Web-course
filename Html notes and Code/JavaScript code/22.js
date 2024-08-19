// using ternary op...

let a = 5,
  b = 20,
  c = 1;

let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);
