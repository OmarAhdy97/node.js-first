const Cart = require('../models/cart')
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

exports.getProduct= (req, res, next)=>{
    const prodId = req.params.prodId;
    Product.findById(prodId, (product =>{
        
        res.render('shop/product-details', {prod : product,pageTitle: 'Shop',
        path: '',})
    }))
    
}

exports.postProduct = (req,res,next)=>{
    const prodId = req.body.prodId;
    Product.findById(prodId, (product =>{
        Cart.addProduct(prodId,product.price)
        console.log(Cart.prices)
        res.render('shop/cart', {price : Cart.prices,prod : Cart.productss,pageTitle: 'Cart',
        path: '/shop/cart',})
    }))
}

exports.getCart = (req,res,next)=>{
    
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: '/shop/cart'})
    
}
exports.getOrders = (req,res,next)=>{
    
    res.render('shop/orders',{
        pageTitle: 'Orders',
        path: '/shop/orders'})
    
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