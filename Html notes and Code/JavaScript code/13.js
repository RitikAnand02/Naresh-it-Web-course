// using for each...

let arr = [5, 8, 7, 1, 6];
function dislay(x) {
  console.log(x * 2);
}
arr.forEach(dislay);
arr.forEach(function (x) {
  console.log(x ** 2);
});
