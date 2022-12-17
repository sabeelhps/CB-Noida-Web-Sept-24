class PizzaStore{
    static cart = [
        {   
            id:999,
            name: 'Cheese Pizza',
            price: 500,
        },
        {
            id:888,
            name: 'Onion Pizza',
            price: 100,
        },
        {   
            id:777,
            name: 'Capcicum Pizza',
            price: 200,
        },
        {   
            id:666,
            name: 'Corn Pizza',
            price: 300
        }
    ];


    static walletAmount = 100000;


    static getAllPizzas(){
        return new Promise((resolve, reject) => {
            const obj = this;
            setTimeout(function() {
                resolve(obj.cart);
            }, 2000);
        })
    }

    static placeOrder() {
        return new Promise((resolve, reject) => {
            const obj = this;
            setTimeout(function() {
                const orderId = "PZ" + String(Math.floor(Math.random() * 8999 + 1000));
                const totalAmount = obj.cart.reduce((total, curr) => total + curr.price, 0);
                resolve({orderId, totalAmount});
            }, 2000);
        })
    }

    static proceedToPayment(orderId, amount) {
        return new Promise((resolve, reject) => {
            const obj = this;
            setTimeout(function() {
                const paymentId = "TXN" + String(Math.floor(Math.random() * 89999999 + 10000000));
                resolve({ paymentId });
            }, 2000);
        })
    }

    static updateWallet(orderAmount) {
        return new Promise((resolve, reject) => {
            const obj = this;
            setTimeout(function () {
                obj.walletAmount = obj.walletAmount - orderAmount;
                resolve(obj.walletAmount);
            }, 2000);
        })
    }
}



async function main() {
    // const pizzas = await PizzaStore.getAllPizzas();
    // console.log(pizzas);
    const {orderId,totalAmount} = await PizzaStore.placeOrder();
  
}

main();