const getCart = () => {
    localStorage.getItem('shopping_cart');
    // console.log(items)
}
const updateCart = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}

const addToLocalFun = id => {
    const exist = getCart();
    let shopping_cart = {};
    
    if(!exist) {
        shopping_cart[id] = 1;
    } else {
        shopping_cart = JSON.parse(exist);
        if(shopping_cart[id]) {
            shopping_cart[id] = shopping_cart[id] + 1;
        } else {
            console.log('exist else')
            shopping_cart[id] = 1;
        }  
    }
    updateCart(shopping_cart);
}

const removeToLocalFun  = id => {
    const exist = getCart();
    if(!exist) {

    } else {
        const  shopping_cart = JSON.parse(exist);
        delete shopping_cart[id];
        updateCart(shopping_cart);
    }
}

export {addToLocalFun, removeToLocalFun}