// use map to iterate throuhg array and return true/ false if number is even or odd..
arr = [5, 8, 2, 1, 4];
let result = arr.map(function (ele) {
  return ele % 2 == 0;
});
console.log(result);
