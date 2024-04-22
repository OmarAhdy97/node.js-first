const Productt = require('../models/product')

exports.getAddProducts = (req,res,next) => {
    res.render('add-product')
}

exports.postAddProducts = (req,res,next) => {
    const product = new Productt(req.body.title);
    console.log(product)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req,res,next)=>{
    Productt.fetchAll(products =>{
        res.render('shop',{ prods : products})
    })
    
    
    
}

exports.get404 = (req,res,next)=>{
    res.render('404')
}