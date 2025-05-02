import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';
import { paymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oops.js';
import '../data/cart-class.js';



renderCheckoutHeader();
renderOrderSummary()
paymentSummary();
