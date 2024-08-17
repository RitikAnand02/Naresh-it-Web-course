// callbacks function...

function mad() {
  console.log("I am sad");
}
function bad(a, b) {
  console.log(b);
  console.log("I am happy" + a);
  b();
}
bad(5, mad);
