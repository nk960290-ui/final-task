products.forEach((product, index) => {
  document.write(`
    <div class="card">
      <h3>Product ${index + 1}</h3>
      <h2>${product.title}</h2>
    </div>
  `);
});
