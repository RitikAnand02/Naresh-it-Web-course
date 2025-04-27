let cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArray);
let mainDiv = document.getElementById("cartData");

// Function to display cart data
function displayData(data) {
  mainDiv.textContent = "";
  data.forEach((c, i) => {
    const div = document.createElement("div");
    div.classList.add("cartItem");

    const img = document.createElement("img");
    img.src = c.thumbnail;
    img.alt = c.title;

    const title = document.createElement("h2");
    title.textContent = c.title;

    const price = document.createElement("p");
    price.textContent = "$" + c.price;

    const removeButton = document.createElement("button");
    removeButton.textContent = "❎";
    removeButton.addEventListener("click", () => deleteData(i));

    div.append(img, title, price, removeButton);
    mainDiv.appendChild(div);
  });
}

// Function to update the total price
function updatePrice() {
  let newPrice = cartArray.reduce((prev, curr) => prev + curr.price, 0);
  document.getElementById("total").textContent = "$" + newPrice.toFixed(2);
}

// Function to update the cart item count
function updatecount() {
  document.getElementById("count").textContent = cartArray.length;
}

// Function to delete an item from the cart
function deleteData(i) {
  cartArray.splice(i, 1); // Remove the item from the array
  localStorage.setItem("cartItems", JSON.stringify(cartArray)); // Update local storage
  displayData(cartArray); // Update the displayed cart items
  updatePrice(); // Update the total price
  updatecount(); // Update the cart item count
}

// Initialize the cart data, price, and count
updatePrice();
displayData(cartArray);
updatecount();
