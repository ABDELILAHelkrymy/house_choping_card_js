const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDom = document.querySelector('.products-center');

//cart
let cart = [];

// Getting the products
class Products{
    async getProducts(){
        fetch('products.json')
    }

}

// Display products
class UI{

}

// Local Storage 
class Storage{

}

document.addEventListener('DOMContentLoaded', ()=>{
    const ui = new UI();
    const products = new Products();
})