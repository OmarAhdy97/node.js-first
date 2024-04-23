const  Product = require('../models/product')
exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('shop/index',{
            prods : products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0})
    })
}

exports.getcart = (req,res,next)=>{
    
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: '/shop/cart'})
    
}
exports.getCheckout = (req,res,next)=>{
    
    res.render('shop/checkout',{
        pageTitle: 'Checkout',
        path: '/shop/chckout'})
    
}
exports.getProductslist = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('shop/product-list',{
            prods : products,
            pageTitle: 'Products list',
            path: '/shop/product-list',
            hasProducts: products.length > 0})
    })
    
}