// Wait until page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Feedback form handling
    const feedbackForm = document.querySelector("form");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert(
                "Thank you for your feedback! We appreciate your support and look forward to serving you again at Urban Eats."
            );

            feedbackForm.reset();
        });
    }
});

// Shopping Cart
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " added to cart!");
}

// Increase quantity
function increaseQuantity(name) {

    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++;
    }

    updateCart();
}

// Decrease quantity
function decreaseQuantity(name) {

    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity--;

        if (item.quantity <= 0) {
            removeItem(name);
            return;
        }
    }

    updateCart();
}

// Remove item completely
function removeItem(name) {

    cart = cart.filter(item => item.name !== name);

    updateCart();
}

// Update cart display
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    // Stop if cart elements do not exist
    if (!cartItems || !cartCount || !cartTotal) {
        return;
    }

    cartItems.innerHTML = "";
    total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <li>
                <strong>${item.name}</strong><br>
                P${item.price} × ${item.quantity} = P${itemTotal}
                <br><br>

                <button onclick="decreaseQuantity('${item.name}')">−</button>

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

    let orderSummary = "Your Order:\n\n";

    cart.forEach(item => {
        orderSummary +=
            `${item.name} x${item.quantity} - P${item.price * item.quantity}\n`;
    });

    orderSummary += `\nTotal: P${total}`;

    alert(
        "Thank you for ordering from Urban Eats!\n\n" +
        orderSummary
    );

    cart = [];
    updateCart();
}

   


