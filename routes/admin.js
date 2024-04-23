const path = require('path')
const express = require('express');
const routerAdmin = express.Router();

const productsControllers = require('../controllers/admin')


routerAdmin.get('/add-products',productsControllers.getAddProducts);
routerAdmin.get('/products',productsControllers.getProducts);

routerAdmin.post('/add-product',productsControllers.postAddProducts);



module.exports = routerAdmin;
