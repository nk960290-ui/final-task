("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let output = "";

    products.forEach(product => {
        output += `
            <div class="card">
                <h3>${product.title}</h3>
            </div>
        `;
    });

    document.getElementById("products").innerHTML = output;

});