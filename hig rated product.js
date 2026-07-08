const highestRatedProduct = products.reduce((highest, product) =>
  product.rating.rate > highest.rating.rate ? product : highest
);

document.write(`
  <div class="card">
    <h2>${highestRatedProduct.title}</h2>
    <p>Rating : ⭐ ${highestRatedProduct.rating.rate}</p>
  </div>
`);