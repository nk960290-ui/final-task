etch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      document.write(`
        <div class="card">
          <h2>${product.title}</h2>
        </div>
      `);
    });
  })
  .catch(() => {
    document.body.innerHTML = `
      <h2> Unable to Load Products</h2>
      <p>Please try again later.</p>
    `;
  });
