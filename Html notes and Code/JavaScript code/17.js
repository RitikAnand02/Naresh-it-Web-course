// using reduce..
arr = [5, 8, 2, 1, 4];
let result = arr.reduce(function (pre, cur) {
  return pre + cur;
}, 10);
console.log(result);
