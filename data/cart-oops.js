function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

         saveToStorage(){
            localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
        },
        
             addToCart(productId) {
            let matchingItem;
          
            this.cartItems.forEach((cartItem) => { 
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
        
            const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
            const quantity = Number(quantitySelector.value);
        
          
            if (matchingItem) {
              matchingItem.quantity += quantity;
            } else {
              cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId:'1'
              });
            }
          
            this.saveToStorage();
          },
        
          
          
         removeFromCart(productId){
            let newCart = [];
        
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId != productId){
                    newCart.push(cartItem);
                }
            });
        
            this.cartItems = newCart;
            this.saveToStorage();
        }
        ,
        
          calculateCartQuantity() {
          let cartQuantity = 0;
        
          this.cartItems.forEach((cartItem)=>{
              cartQuantity += cartItem.quantity;
          })
          return cartQuantity
        
        },
        
         updateQuantity(productId, newQuantity) {
          let matchingItem;
        
          this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });
        
          matchingItem.quantity = newQuantity;
        
          this.saveToStorage();
        },
        
         updateDeliveryOption(productId , deliveryOptionId){
          let matchingItem;
          
          this.cartItems.forEach((cartItem) => { 
            if (productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });
        
          matchingItem.deliveryOptionId = deliveryOptionId;
          this.saveToStorage();
        }
        
    }

    return cart;
}

const cart = Cart('cart-oop');
const buisnessCart = Cart('buisness-cart')

console.log(cart);
console.log(buisnessCart);