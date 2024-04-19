const path = require('path')
const express = require('express');
const adminData = require('./admin')

const routerShop = express.Router();



routerShop.get('/',(req,res,next)=>{
    const products = adminData.products
    res.render('shop',{prods : products})
})

module.exports = routerShop