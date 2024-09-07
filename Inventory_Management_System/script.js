var _a;
// Create an array of product objects
// Create an array of product objects
var products = [
    { name: "Nintendo Switch OLED", quantity: 20, price: 350, category: "Gaming" },
    { name: "Dell XPS 13", quantity: 10, price: 1800, category: "Computers" },
    { name: "Apple Watch Series 8", quantity: 12, price: 450, category: "Wearables" },
    { name: "MacBook Pro M2", quantity: 8, price: 2500, category: "Electronics" },
];
// Function to display products in the table
function displayProducts() {
    var tableBody = document.getElementById('product-list');
    tableBody.innerHTML = ''; // Clear existing rows
    products.forEach(function (product, index) {
        var row = document.createElement('tr');
        row.innerHTML = "\n<td>".concat(index + 1, "</td>\n<td>").concat(product.name, "</td>\n<td>").concat(product.quantity, "</td>\n<td>$").concat(product.price, "</td>\n<td>").concat(product.category, "</td>\n");
        tableBody.appendChild(row);
    });
}
// Function to add a new product
function addProduct() {
    var nameInput = document.getElementById('product-name');
    var quantityInput = document.getElementById('product-quantity');
    var priceInput = document.getElementById('product-price');
    var name = nameInput.value;
    var quantity = parseInt(quantityInput.value, 10);
    var price = parseFloat(priceInput.value);
    var category = "Electronics"; // Default category
    if (name && !isNaN(quantity) && !isNaN(price)) {
        products.push({ name: name, quantity: quantity, price: price, category: category });
        displayProducts();
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    }
    else {
        alert("Please enter valid values for all fields.");
    }
}
// Event listener for the "Add Product" button
(_a = document.getElementById('add-product-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addProduct);
// Call the function to display the products when the page loads
displayProducts();
