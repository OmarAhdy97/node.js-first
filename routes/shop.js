const path = require('path')
const express = require('express');
const productsControllers = require('../controllers/products.js')

const routerShop = express.Router();



routerShop.get('/', productsControllers.getProducts);

module.exports = routerShop