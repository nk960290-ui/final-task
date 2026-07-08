const electronicsProducts = products.filter((product) => {
  return product.category === "electronics";
});

electronicsProducts.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
      <p>Category : ${product.category}</p>
    </div>
  `);
});