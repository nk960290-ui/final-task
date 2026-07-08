const productsDiv = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");
const price = document.getElementById("price");
const count = document.getElementById("count");

let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    displayProducts();
  })
  .catch(() => {
    productsDiv.innerHTML = `
      <h2> Unable to Load Products</h2>
      <p>Please try again later.</p>
    `;
  });

function displayProducts() {
  productsDiv.innerHTML = "";
  let total = 0;

  allProducts.forEach((product) => {

    if (
      product.title.toLowerCase().includes(search.value.toLowerCase())
    ) {

      if (
        category.value == "all" ||
        product.category == category.value
      ) {

        if (
          product.price < Number(price.value)
        ) {

          total++;

          productsDiv.innerHTML += `
            <div class="card">
              <img src="${product.image}" width="150">
              <h3>${product.title}</h3>
              <p>Category : ${product.category}</p>
              <p>Price : $${product.price}</p>
              <p>Rating :  ${product.rating.rate}</p>
              <button>Buy Now</button>
            </div>
          `;
        }
      }
    }

  });

  count.innerHTML = "Total Products : " + total;

  if (total == 0) {
    productsDiv.innerHTML = `
      <h2> No Products Found</h2>
    `;
  }
}

search.addEventListener("input", displayProducts);
category.addEventListener("change", displayProducts);
price.addEventListener("change", displayProducts);
