const path = require('path')
const express = require('express');
const shopControllers = require('../controllers/shop.js')

const routerShop = express.Router();



routerShop.get('/', shopControllers.getProducts);
routerShop.get('/cart', shopControllers.getCart);
routerShop.get('/orders', shopControllers.getOrders);
routerShop.get('/checkout', shopControllers.getCheckout);
routerShop.get('/product-list', shopControllers.getProductslist);
routerShop.get('/products/:prodId',shopControllers.getProduct)
routerShop.post('/cart',shopControllers.postProduct)





module.exports = routerShop