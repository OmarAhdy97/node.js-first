const path = require('path')
const express = require('express');
const routerAdmin = express.Router();

const productsControllers = require('../controllers/products')


routerAdmin.get('/add-product',productsControllers.getAddProducts);

routerAdmin.post('/add-product',productsControllers.postAddProducts);



module.exports = routerAdmin;
