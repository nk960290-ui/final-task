let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 8500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
document.getElementById("count").innerHTML =
`Total Products : ${products.length}`;

let output = "";

products.forEach(product => {
    output += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
        </div>
    `;
});

document.getElementById("products").innerHTML = output;
