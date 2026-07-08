products.forEach((product) => {
  if (product.price > 100) {
    cards.innerHTML += `
      <div class="card">
        <img src="${product.image}" width="150">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
      </div>
    `;
  }
});