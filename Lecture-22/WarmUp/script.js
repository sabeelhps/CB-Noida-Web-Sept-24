const cart = [
    {
        name: 'Cheese Pizza',
        price: 500
    },
    {
        name: 'Onion Pizza',
        price: 100
    },
    {
        name: 'Capcicum Pizza',
        price: 200
    },
    {
        name: 'Corn Pizza',
        price: 300
    }
];

function applyDiscount(cart, discount) {
    return cart.map((pizza) => {
        return { ...pizza, price: pizza.price * discount / 100 };
    });
}

console.table(cart);
console.table(applyDiscount(cart, 50));

const discountedCart = applyDiscount(cart, 50);


function sortCartByPrice(cart) {
    return cart.sort((pizza1, pizza2) => pizza1.price - pizza2.price);
}

console.log(sortCartByPrice(discountedCart));