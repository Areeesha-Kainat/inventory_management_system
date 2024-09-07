
// Define the Product interface
interface Product {
name: string;
quantity: number;
price: number;
category: string;
}

// Create an array of product objects
// Create an array of product objects
const products: Product[] = [
    { name: "Nintendo Switch OLED", quantity: 20, price: 350, category: "Gaming" },
    { name: "Dell XPS 13", quantity: 10, price: 1800, category: "Computers" },
    { name: "Apple Watch Series 8", quantity: 12, price: 450, category: "Wearables" },
    { name: "MacBook Pro M2", quantity: 8, price: 2500, category: "Electronics" },


  ];
  

// Function to display products in the table
function displayProducts() {
const tableBody = document.getElementById('product-list') as HTMLTableSectionElement;
tableBody.innerHTML = ''; // Clear existing rows

products.forEach((product, index) => {
const row = document.createElement('tr');
row.innerHTML = `
<td>${index + 1}</td>
<td>${product.name}</td>
<td>${product.quantity}</td>
<td>$${product.price}</td>
<td>${product.category}</td>
`;
tableBody.appendChild(row);
});
}

// Function to add a new product
function addProduct() {
const nameInput = document.getElementById('product-name') as HTMLInputElement;
const quantityInput = document.getElementById('product-quantity') as HTMLInputElement;
const priceInput = document.getElementById('product-price') as HTMLInputElement;

const name = nameInput.value;
const quantity = parseInt(quantityInput.value, 10);
const price = parseFloat(priceInput.value);
const category = "Electronics"; // Default category

if (name && !isNaN(quantity) && !isNaN(price)) {
products.push({ name, quantity, price, category });
displayProducts();
nameInput.value = '';
quantityInput.value = '';
priceInput.value = '';
} else {
alert("Please enter valid values for all fields.");
}
}

// Event listener for the "Add Product" button
document.getElementById('add-product-btn')?.addEventListener('click', addProduct);

// Call the function to display the products when the page loads
displayProducts();

