const mensProducts = products.filter(
  (product) => product.category === "men's clothing"
);

mensProducts.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
    </div>
  `);
});
