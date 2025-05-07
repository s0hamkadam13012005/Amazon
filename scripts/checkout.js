import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';
import { paymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oops.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js'
import {loadProductsFetch, loadProducts} from '../data/products.js'
import { loadCart }  from '../data/cart.js';


async function loadPage() {
  try {
    //throw 'error4'
    await loadProductsFetch();

   const value =  await new Promise((resolve, reject)=>{
        loadCart(()=>{
            resolve('value3');
           // reject('value3')
        });
    });

} catch(error) {
    console.log("unexpected error. please try again later")
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
