const firstFiveProducts = products.slice(0, 5);

firstFiveProducts.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
    </div>
  `);
});