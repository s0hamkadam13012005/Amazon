import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';
import { paymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oops.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js'
import {loadProductsFetch, loadProducts} from '../data/products.js'
import { loadCartFetch }  from '../data/cart.js';

/*
async function loadPage() {
  try {
    //   throw 'error4'
    await loadProductsFetch();

   await loadCartFetch()
} catch(error) {
    console.log("unexpected error. please try again later")
}
    renderCheckoutHeader();
    renderOrderSummary()
    paymentSummary();
    

}
loadPage();
*/
async function loadPage() {
try {
await Promise.all([ 
    loadProductsFetch(),
    loadCartFetch()
])

}
catch (error) {
    console.log('Unexpected error. Please try again later.');
  }
    renderCheckoutHeader();
    renderOrderSummary()
    paymentSummary();
}

loadPage();
/*

Promise.all([
 loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })
]).then((values)=>{
    console.log(values)
    renderCheckoutHeader();
    renderOrderSummary()
    paymentSummary();
    
})
*/
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();

    })
}).then(()=>{
    renderCheckoutHeader();
renderOrderSummary()
paymentSummary();
})*/

/*
 loadProducts(()=>{
    renderCheckoutHeader();
renderOrderSummary()
paymentSummary();

 })
*/
