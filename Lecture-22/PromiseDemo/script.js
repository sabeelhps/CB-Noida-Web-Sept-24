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
                const orderAmount = obj.cart.reduce((total, curr) => total + curr.price, 0);
                resolve({orderId, orderAmount});
            }, 2000);
        })
    }

    static proceedToPayment(orderId) {
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



// async function main() {
//     // const pizzas = await PizzaStore.getAllPizzas();
//     // console.log(pizzas);
//     const {orderId,totalAmount} = await PizzaStore.placeOrder();
  
// }

// main();



async function createPizzaOrder() {
    try {
        const { orderId, orderAmount } = await PizzaStore.placeOrder();
        console.log(`Order Placed with OrderId : ${orderId}.Proceeding to the payment page`);
        const { paymentId } = await PizzaStore.proceedToPayment(orderId);
        console.log(`Payment successfull with paymentId : ${paymentId}`);
        const updatedWalletAmount = await PizzaStore.updateWallet(orderAmount);
        console.log(`Updated Wallet amount : ${updatedWalletAmount}`);
    }
    catch (err) {
        console.log('Something went wrong');
        console.log(err.message);
    }
}

createPizzaOrder();