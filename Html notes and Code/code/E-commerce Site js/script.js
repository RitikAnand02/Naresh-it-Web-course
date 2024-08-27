const mainDiv = document.getElementById("productsList");
const cat = document.getElementById("cat");
const fetchCategories = () => {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => {
        const op = document.createElement("option");
        op.textContent = data.name;
        op.value = data.slug;
        cat.append(op);
      });
    });
};
fetchCategories();
document.getElementById("cat").addEventListener("input", function (e) {
  fetch(`https://dummyjson.com/products/category/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => displayData(data.products));
});
const fetchData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    displayData(data.products);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
const displayData = (data) => {
  mainDiv.textContent=''
  data.forEach((p) => {
    const proDiv = document.createElement("div");
    proDiv.classList.add("product");
    const proImage = document.createElement("img");
    proImage.src = p.thumbnail;
    proImage.alt = p.title;
    const proLink = document.createElement("a");
    proLink.href = `./product.html?pid=${p.id}`;
    proLink.target = "_blank";
    const proTitle = document.createElement("h2");
    proTitle.textContent = p.title;
    proLink.append(proTitle);
    const proPrice = document.createElement("p");
    proPrice.textContent = "Price: $" + p.price;
    const addCartButton = document.createElement("button");
    addCartButton.textContent = "ADD CART";
    addCartButton.addEventListener("click", () => addCartFn(p));
    proDiv.append(proImage, proLink, proPrice, addCartButton);
    mainDiv.appendChild(proDiv);
  });
};

const displayMenuData = (data) => {
  data.products.forEach((menu) => {
    const filterMenu = document.getElementById("filter-menu");
    const menuList = document.createElement("li");
    filterMenu.append(menuList);
    menuList.textContent = menu.category;
  });
};

displayMenuData();
