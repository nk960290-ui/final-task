products.forEach((product) => {
  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
      <p>Rating : ⭐ ${product.rating.rate}</p>
    </div>
  `);
});