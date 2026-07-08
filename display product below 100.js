fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let output = "";

    products
        .filter(product => product.price < 100)
        .forEach(product => {
            output += `
                <div class="card">
                    <h3>${product.title}</h3>
                    <p>Price : $${product.price}</p>
                </div>
            `;
        });

    document.getElementById("products").innerHTML = output;
});
