const jewelleryProducts = products.filter(
  (product) => product.category === "jewelery"
);

jewelleryProducts.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
    </div>
  `);
});
