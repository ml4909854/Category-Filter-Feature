const productListContainer = document.getElementById("productListContainer");
const category = document.getElementById("category");

async function getData() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  
  showData(data.products);

  filterData(data.products);
}

function showData(products) {
  productListContainer.innerHTML = "";

  products.forEach((product) => {
    let div = document.createElement("div");
    
    let images = document.createElement("img");
    images.src = product.images[0];
    images.style.width = "100px"
   

    let title = document.createElement("p");
    title.innerHTML = `Title: ${product.title}`;

    let price = document.createElement("p");
    price.innerHTML = `Price: $${product.price}`;

    let category = document.createElement("p");
    category.innerHTML = `Category: ${product.category}`;

    div.append(images, title, price, category);
    productListContainer.append(div);
  });
}

function filterData(products) {
  category.addEventListener("change", function () {
    let selectedCategory = category.value;

    let filteredProducts = selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

    showData(filteredProducts);
  });
}

getData();
