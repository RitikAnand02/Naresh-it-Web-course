// closures

function x() {
  var count = 0;
  function y() {
    count++;
    console.log(count);
  }
  return y;
}
let z = x();
console.log(z);
z();
z();
z();
z();