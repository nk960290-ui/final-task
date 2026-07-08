const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );

  document.getElementById("root").innerHTML = "";

  filteredProducts.forEach((product) => {
    document.getElementById("root").innerHTML += `
      <div class="card">
        <h2>${product.title}</h2>
      </div>
    `;
  });
});
