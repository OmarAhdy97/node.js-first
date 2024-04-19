const path = require('path')
const express = require('express');
const routerAdmin = express.Router();
const products = [];


routerAdmin.get('/add-product',(req,res,next) => {
    res.render('add-product')

});

routerAdmin.post('/add-product',(req,res,next) => {
    products.push( req.body.title)
    res.redirect('/')
});



exports.routerAdmin = routerAdmin;
exports.products = products;