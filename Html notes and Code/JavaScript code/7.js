// callback function...

function addcart() {
  console.log("Items is added sucessfully");
}
function cart(a) {
  a();
  console.log("Procced to checkout");
}
function checkout(b) {
  b(addcart);
  console.log("Do the payment");
}
checkout(cart);
