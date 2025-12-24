/* --- DATA SOURCE (Based on PDF Content) --- */
const products = [
    // WOMEN
    { id: 1, name: "Zara Petal Dress", category: "women", price: 8150, image: "Screenshot (80).png", type: "Dress" },
    { id: 2, name: "Halter Neck Wrap Dress", category: "women", price: 5450, image: "Screenshot (78).png", type: "Dress" },
    { id: 3, name: "Tie Up Maxi Dress", category: "women", price: 7250, image: "Screenshot (79).png", type: "Dress" },
    { id: 4, name: "Pink Floral Embroidered Saree", category: "women", price: 56240, image: "Screenshot (95).png", type: "Saree" },
    { id: 5, name: "Pintuck Bustier Top", category: "women", price: 4950, image: "Screenshot (86).png", type: "Top" },
    
    // MEN
    { id: 6, name: "Madison Stripe Shirt", category: "men", price: 8450, image: "Screenshot (1).jpg", type: "Shirt" },
    { id: 7, name: "Black Slim Fit Suit Jacket", category: "men", price: 24560, image: "Screenshot (114).png", type: "Suit" },
    { id: 8, name: "Liva Kurtha", category: "men", price: 3350, image: "Screenshot (107).png", type: "Kurtha" },
    { id: 9, name: "Oversize T-Shirt", category: "men", price: 3650, image: "Screenshot (109).png", type: "T-Shirt" },

    // KIDS
    { id: 10, name: "Liya Top", category: "kids", price: 3290, image: "Screenshot (121).png", type: "Top" },
    { id: 11, name: "Datsun Check Shirt", category: "kids", price: 3650, image: "Screenshot (128).png", type: "Shirt" },
    { id: 12, name: "Tropical print dress", category: "kids", price: 2990, image: "Screenshot (123).png", type: "Dress" },
    { id: 13, name: "Letter hand moto tee", category: "kids", price: 4565, image: "Screenshot (127).png", type: "T shirt" },



    // ACCESSORIES
    { id: 14, name: "Women's Frameless Glasses", category: "accessories", price: 3979, image: "Screenshot (131).png", type: "Glasses" },
    { id: 15, name: "Quartz Elegant Watch", category: "accessories", price: 3721, image: "Screenshot (132).png", type: "Watch" },
    { id: 16, name: "Butterfly Ring", category: "accessories", price: 459, image: "Screenshot (133).png", type: "Ring" },
    { id: 17, name: "Butterfly Earring", category: "accessories", price: 977, image: "Screenshot (135).png", type: "Eaaring" },
    { id: 18, name: "Elegant 3 layer Bracelet", category: "accessories", price: 2516, image: "Screenshot (136).png", type: "Bracelet" },
    { id: 19, name: "Fashionable bow hat", category: "accessories", price: 9475, image: "Screenshot (134).png", type: "Hat" },
];


let cart = [];

/* --- APP INITIALIZATION --- */
window.onload = function() {
    renderHome();
};

/* --- RENDER FUNCTIONS --- */

// 1. RENDER HOME PAGE
function renderHome() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <section class="hero">
            <div class="hero-content">
                <h1>FASHION SALE</h1>
                <p>Up to 50% Off Selected Items</p>
                <button class="btn-primary" onclick="renderCategory('women')">Shop Now</button>
            </div>
        </section>

        <section class="section-container">
            <h2 class="section-title">About Us</h2>
            <div style="text-align:center; max-width: 800px; margin: 0 auto;">
                <p>We believe fashion is more than clothing; it’s a reflection of confidence, individuality, and lifestyle. Our mission is to provide affordable, high-quality pieces that blend modern trends with classic designs.</p>
            </div>
        </section>

        <section class="section-container">
            <h2 class="section-title">Our Packages</h2>
            <div class="packages-grid">
                <div class="package-card">
                    <h3>Basic Package</h3>
                    <p>3 casual wear items, 1 accessory</p>
                    <div class="package-price">LKR 6500.00</div>
                    <button class="btn-primary">View More</button>
                </div>
                <div class="package-card">
                    <h3>Standard Package</h3>
                    <p>3 casual wear items, 1 accessory, express delivery</p>
                    <div class="package-price">LKR 10500.00</div>
                    <button class="btn-primary">View More</button>
                </div>
                <div class="package-card">
                    <h3>Deluxe Package</h3>
                    <p>5 clothing items, 2 accessories, priority delivery + gift</p>
                    <div class="package-price">LKR 18500.00</div>
                    <button class="btn-primary">View More</button>
                </div>
            </div>
            <div class="vouchers-area">
                <div class="voucher"><strong>WELCOME10</strong><br>10% off first order</div>
                <div class="voucher"><strong>BUNDLE20</strong><br>20% off 2 packages</div>
            </div>
        </section>
    `;
    window.scrollTo(0,0);
}

// 2. RENDER CATEGORY GRID
function renderCategory(category) {
    const main = document.getElementById('main-content');
    const filteredProducts = products.filter(p => p.category === category);
    
    let productsHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="renderProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>LKR ${product.price}.00</p>
            </div>
        </div>
    `).join('');

    main.innerHTML = `
        <section class="section-container">
            <h2 class="section-title" style="text-transform: capitalize;">${category} Collection</h2>
            <div class="product-grid">
                ${productsHTML}
            </div>
        </section>
    `;
    window.scrollTo(0,0);
}

// 3. RENDER SINGLE PRODUCT DETAIL
function renderProductDetail(id) {
    const product = products.find(p => p.id === id);
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <section class="section-container">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-info">
                    <p style="color:gray;">Home / ${product.category} / ${product.name}</p>
                    <h1>${product.name}</h1>
                    <div class="detail-price">LKR ${product.price}.00</div>
                    
                    <div class="form-group">
                        <label>Size:</label>
                        <div class="size-selector">
                            <button onclick="selectOption(this)">S</button>
                            <button onclick="selectOption(this)">M</button>
                            <button onclick="selectOption(this)">L</button>
                        </div>
                    </div>

                    <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <br><br>
                    <p><i class="far fa-heart"></i> Add to Wishlist</p>
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0,0);
}

// 4. CART & CHECKOUT LOGIC
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${product.name} added to cart!`);
}

function showSection(sectionName) {
    const main = document.getElementById('main-content');
    
    if (sectionName === 'cart') {
        if(cart.length === 0) {
            main.innerHTML = `<div class="section-container" style="text-align:center;"><h2>Your Cart is Empty</h2><button class="btn-primary" onclick="renderHome()">Continue Shopping</button></div>`;
            return;
        }

        let total = cart.reduce((sum, item) => sum + item.price, 0);
        let cartRows = cart.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>LKR ${item.price}.00</td>
            </tr>
        `).join('');

        main.innerHTML = `
            <section class="section-container form-box">
                <h2 class="section-title">Shopping Cart</h2>
                <table class="cart-table">
                    <tr><th>Product</th><th>Price</th></tr>
                    ${cartRows}
                    <tr><td><strong>Total</strong></td><td><strong>LKR ${total}.00</strong></td></tr>
                </table>
                <button class="btn-primary" onclick="showSection('checkout')">Proceed to Checkout</button>
            </section>
        `;
    } 
    
    else if (sectionName === 'checkout') {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        main.innerHTML = `
            <section class="section-container">
                <h2 class="section-title">Checkout</h2>
                <div class="detail-container">
                    <div class="form-box" style="flex:1;">
                        <h3>Billing Details</h3>
                        <form onsubmit="event.preventDefault(); showSection('tracking');">
                            <div class="form-group"><label>Full Name</label><input type="text" required></div>
                            <div class="form-group"><label>Email</label><input type="email" required></div>
                            <div class="form-group"><label>Address</label><input type="text" required></div>
                            <div class="form-group"><label>City</label><input type="text" required></div>
                            <button type="submit" class="btn-primary" style="width:100%;">Place Order</button>
                        </form>
                    </div>
                    <div style="flex:1; background:#fff; padding:20px; height:fit-content;">
                        <h3>Your Order</h3>
                        <p>Total Items: ${cart.length}</p>
                        <p class="detail-price">Total: LKR ${total}.00</p>
                        <p>Payment: Cash on Delivery</p>
                    </div>
                </div>
            </section>
        `;
    } 
    
    else if (sectionName === 'tracking') {
        cart = []; // Clear cart on success
        document.getElementById('cart-count').innerText = "0";
        main.innerHTML = `
            <section class="section-container" style="text-align:center;">
                <h2 class="section-title">Order Tracking</h2>
                <p>Order ID: #260032579</p>
                <div class="tracking-steps">
                    <div class="step active"><div class="step-circle">1</div><p>Confirmed</p></div>
                    <div class="step active"><div class="step-circle">2</div><p>Dispatched</p></div>
                    <div class="step"><div class="step-circle">3</div><p>On the Way</p></div>
                    <div class="step"><div class="step-circle">4</div><p>Delivered</p></div>
                </div>
                <p>Your order is on its way!</p>
            </section>
        `;
    } 
    
    else if (sectionName === 'contact') {
        main.innerHTML = `
            <section class="section-container form-box">
                <h2 class="section-title">Get in Touch</h2>
                <form>
                    <div class="form-group"><label>Name</label><input type="text"></div>
                    <div class="form-group"><label>Email</label><input type="email"></div>
                    <div class="form-group"><label>Message</label><textarea rows="5"></textarea></div>
                    <button class="btn-primary">Send Message</button>
                </form>
            </section>
        `;
    }
    
    else if (sectionName === 'login') {
        main.innerHTML = `
            <section class="section-container form-box" style="text-align:center;">
                <h2 class="section-title">Sign In</h2>
                <div class="form-group"><input type="email" placeholder="Email"></div>
                <div class="form-group"><input type="password" placeholder="Password"></div>
                <button class="btn-primary" style="width:100%;">Sign In</button>
                <p style="margin-top:20px;">Don't have an account? <a href="#" style="text-decoration:underline;">Sign Up</a></p>
            </section>
        `;
    
}
else if (sectionName === 'signup') {
    main.innerHTML = `
        <section class="section-container form-box" style="text-align:center;">
            <h2 class="section-title">Create Account</h2>
            <div class="form-group">
                <input type="text" id="reg-name" placeholder="Full Name">
            </div>
            <div class="form-group">
                <input type="email" id="reg-email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" id="reg-password" placeholder="Password">
            </div>
            <div class="form-group">
                <input type="password" id="reg-confirm" placeholder="Confirm Password">
            </div>
            <button class="btn-primary" style="width:100%;" onclick="handleSignUp()">Sign Up</button>
            <p style="margin-top:20px;">
                Already have an account?
                <a href="#" onclick="showSection('login')" style="text-decoration:underline;">Sign In</a>
            </p>
        </section>
    `;
}
    

    
    window.scrollTo(0,0);
}

// Helper for UI buttons
function selectOption(btn) {
    let siblings = btn.parentNode.children;
    for(let sib of siblings) sib.classList.remove('selected');
    btn.classList.add('selected');
}

function toggleMobileMenu() {
    // Simple toggle logic for mobile menu could go here
    alert("Menu toggled (mobile view)");

}

async function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch('signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Registration successful! Please sign in.");
            showSection('login');
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert("Error connecting to server.");
    }
}