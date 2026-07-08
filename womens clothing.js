const womensProducts = products.filter(
  (product) => product.category === "women's clothing"
);

womensProducts.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
    </div>
  `);
});
