// Feedback form submission
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector("form");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for your feedback! We appreciate your support and look forward to serving you again at Urban Eats.");

            feedbackForm.reset();
        });
    }
});

let cart = [];
let total = 0;

// Add Item
function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

// Increase Quantity
function increaseQuantity(name) {
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++;
    }

    updateCart();
}

// Decrease Quantity
function decreaseQuantity(name) {
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.name !== name);
        }
    }

    updateCart();
}

// Remove Item
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);

    updateCart();
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <li>
            <strong>${item.name}</strong><br>

            P${item.price} × ${item.quantity}
            = P${item.price * item.quantity}

            <br><br>

            <button onclick="decreaseQuantity('${item.name}')">-</button>

            <button onclick="increaseQuantity('${item.name}')">+</button>

            <button onclick="removeItem('${item.name}')">
                Remove
            </button>

            <hr>
        </li>
        `;
    });

    cartCount.innerText = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    cartTotal.innerText = "P" + total;
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(
        "Thank you for ordering from Urban Eats!\n\n" +
        "Total Amount: P" + total
    );

    cart = [];
    updateCart();
}

