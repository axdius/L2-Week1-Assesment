let productContainer = document.getElementById('productContainer')
let cartContainer = document.getElementById('cartContainer')
let cartProductContainer = document.getElementById("cartProductContainer")

const products = [
    {
        id: 1,
        name: 'Armchair',
        price: 25,
        discountedPrice: '15',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_4_wzznca.png'
    },
    {
        id: 2,
        name: 'Rocking Chair',
        price: 35,
        discountedPrice: '25',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_7_lkft2t.png'
    },
    {
        id: 3,
        name: 'Office Chair',
        price: 40,
        discountedPrice: '30',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_3_nxy575.png'
    },
    {
        id: 4,
        name: 'Dining Chair',
        price: 28,
        discountedPrice: '18',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_o2ceqv.png'
    },
    {
        id: 5,
        name: 'Bean Bag Chair',
        price: 50,
        discountedPrice: '40',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_5_wygls6.png'
    },
    {
        id: 6,
        name: 'Recliner Chair',
        price: 55,
        discountedPrice: '45',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_6_inlj4y.png'
    },
    {
        id: 7,
        name: 'Accent Chair',
        price: 32,
        discountedPrice: '22',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485910/Image_1_gkv7zg.png'
    },
    {
        id: 8,
        name: 'Wingback Chair',
        price: 38,
        discountedPrice: '28',
        imageUrl : 'https://res.cloudinary.com/dfsppvj1s/image/upload/v1710485909/Image_4_wzznca.png'
    }
];

let cartProducts = [];



function addToCart(productId) {
    // Find the product from the products array based on productId
    const productToAdd = products.find(product => product.id === productId);
    // Add the product to cartProducts array
    cartProducts.push(productToAdd);
    // Render cart items again to update the display
    renderCartItem(cartProducts);
}


function removeFromCart(productId) {
    // Find index of the product to remove in cartProducts array
    const index = cartProducts.findIndex(product => product.id === productId);
    // If product is found, remove it from the array
    if (index !== -1) {
        cartProducts.splice(index, 1);
        // Render cart items again to update the display
        renderCartItem(cartProducts);
    }
}

function renderProducts(data){
    data.forEach(products => {
        let card = document.createElement('div');
        card.id  = products.id;
        card.classList.add('product-card');

        let productImage = products.imageUrl;

        let price = products.price;

        let discountPrice = products.discountedPrice;

        let name = products.name;

        card.innerHTML = `
            <img src="${productImage}" alt="chair" class="product-image">
            <div class="product-details">
                <div class="name-price-container">
                    <h3 class="name">${name}</h3>
                    <p class="discounted-price">$ ${discountPrice} <span class="price">$ ${price}</span></span></p>
                </div>
                <button onClick="addToCart(${products.id})" class="cart-logo">
                    <img src="https://res.cloudinary.com/dfsppvj1s/image/upload/v1710489892/cartlogo_znt8qs.png" alt="logo" class="logo">
                </button>
            </div>
        `;

        productContainer.appendChild(card)
    
    });
}

function renderCartItem(data) {
    cartProductContainer.innerHTML = ''; // Clear the cart container before rendering

    if (data.length === 0) {
        let cart = document.createElement('div');
        cart.classList.add('cart')
        cartContainer.appendChild(cart)

        let emptyCart = document.createElement('p');
        emptyCart.classList.add('empty-cart-text')
        emptyCart.textContent = 'Your Cart is Empty'
        cart.appendChild(emptyCart)
    } else {
        data.forEach(product => { // Change 'products' to 'product' here
            let card = document.createElement('div');
            card.id = product.id;
            card.classList.add('product-card');

            let productImage = product.imageUrl;
            let price = product.price;
            let discountPrice = product.discountedPrice;
            let name = product.name;

            card.innerHTML = `
                <img src="${productImage}" alt="chair" class="product-image">
                <div class="product-details">
                    <div class="name-price-container">
                        <h3 class="name">${name}</h3>
                        <p class="discounted-price">$ ${discountPrice}</p>
                    </div>
                    <button onclick="removeFromCart(${product.id})" class="cart-logo">
                        <img src="https://res.cloudinary.com/dfsppvj1s/image/upload/v1710495947/cross_button_otwslw.png" alt="logo" class="cross-button" >
                    </button>
                </div>
            `;

            cartProductContainer.appendChild(card);
        });
    }
}


renderProducts(products);
renderCartItem(cartProducts);
