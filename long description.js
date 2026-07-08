products.forEach((product) => {
  let description = product.description;

  if (description.length > 100) {
    description = description.slice(0, 100) + " Read More...";
  }

  document.write(`
    <div class="card">
      <h2>${product.title}</h2>
      <p>${description}</p>
    </div>
  `);
});