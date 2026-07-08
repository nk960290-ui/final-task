const cheapestProduct = products.reduce((lowest, product) =>
  product.price < lowest.price ? product : lowest
);

document.write(`
  <div class="card">
    <h2>${cheapestProduct.title}</h2>
    <p>Price : $${cheapestProduct.price}</p>
  </div>
`);
