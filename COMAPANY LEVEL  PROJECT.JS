const products = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");
const count = document.getElementById("count");

let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    showProducts(allProducts);
  })
  .catch(() => {
    products.innerHTML = `
      <h2> Unable to Load Products</h2>
      <p>Please try again later.</p>
    `;
  });

function showProducts(data) {
  products.innerHTML = "";
  count.innerHTML = "Total Products : " + data.length;

  data.forEach((product) => {
    products.innerHTML += `
      <div class="card">
        <img src="${product.image}" width="120">
        <h3>${product.title}</h3>
        <p>Category : ${product.category}</p>
        <p>Price : $${product.price}</p>
        <p>Rating : ⭐ ${product.rating.rate}</p>
        <button>Buy Now</button>
      </div>
    `;
  });
}

search.addEventListener("input", () => {
  let searchValue = search.value.toLowerCase();

  let filtered = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchValue) &&
      (category.value === "all" || product.category === category.value)
    );
  });

  showProducts(filtered);
});

category.addEventListener("change", () => {
  let searchValue = search.value.toLowerCase();

  let filtered = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchValue) &&
      (category.value === "all" || product.category === category.value)
    );
  });

  showProducts(filtered);
});