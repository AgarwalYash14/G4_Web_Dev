// let cart = ['shoes', 'shirt', 'wallets']

// function orderDetail(cart) {
//     // 1. Total no of products
//     // 2. Total amount of Products nos*1000

//     const noOfProduct = cart.length
//     const totalAmount = noOfProduct * 1000
//     return {
//         noOfProduct: noOfProduct,
//         totalAmount: totalAmount,
//     }
// }

// function orderSummary(cart) {
//     // total price and total product
//     // then generate orderId
//     let orderDetails = orderDetail(cart)

//     let totalPrice = orderDetails.totalAmount
//     let totalProducts = orderDetails.noOfProduct
//     let orderId = Math.floor(Math.random() * 1000000)

//     console.log(`Order ID: ${orderId}`)
//     console.log(`Total Products: ${totalProducts}`)
//     console.log(`Total Price: Rs ${totalPrice}`)

//     return {
//         orderId: orderId,
//         totalPrice: totalPrice,
//         totalProducts: totalProducts,
//     }
// }

// function paymentGateway() {
//     // orderId, product details and price.. Payment is successfull

//     let orderDetails = orderSummary(cart)

// }

// function successfullOrder() {
//     // it will give all the details about the payment product name and everything
// }

// PROTOTYPE ARRAY FILTER

// let arr = [2, 3, 4, 5, 8]

// Array.prototype.calculate = function (logic) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(logic(this[i]))
//     }
//     return result
// }

// Array.prototype.myFilter = function (logic) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         if (logic(this[i])) {
//             result.push(this[i])
//         }
//     }
//     return result
// }

// function triple(x) {
//     return x * x * x
// }

// function isEven(x) {
//     return x % 2 === 0
// }

// let tripledArray = arr.calculate(triple)
// console.log(tripledArray) // [8, 27, 64, 125, 512]

// let filteredArray = arr.myFilter(isEven)
// console.log(filteredArray) // [2, 4, 8]

// Array.prototype.reduce

// 0 + 1 + 2 + 3 + 4

const array1 = [0, 1, 2, 3, 4]

const initialValue = 0
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
)

console.log(sumWithInitial)

const sumOfAll = array1.reduce(function (acc, curr) {
    acc = acc + curr
    return acc
}, 10)

console.log(sumOfAll)

Array.prototype.reducedPrototype = function (callback, initialValue) {
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

let reducedOutput = array1.reducedPrototype((acc, curr) => acc + curr, 0)
console.log(reducedOutput)
