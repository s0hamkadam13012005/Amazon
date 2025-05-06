import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';
import { paymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oops.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js'
import {loadProductsFetch, loadProducts} from '../data/products.js'
import { loadCart }  from '../data/cart.js';


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
