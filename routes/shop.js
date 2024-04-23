const path = require('path')
const express = require('express');
const shopControllers = require('../controllers/shop.js')

const routerShop = express.Router();



routerShop.get('/', shopControllers.getProducts);
routerShop.get('/cart', shopControllers.getcart);
routerShop.get('/checkout', shopControllers.getCheckout);
routerShop.get('/product-list', shopControllers.getProductslist);




module.exports = routerShop