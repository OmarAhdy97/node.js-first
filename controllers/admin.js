const  Product = require('../models/product')

exports.getAddProducts = (req,res,next) => {
    res.render('admin/add-products',{
            
        pageTitle: 'Add Products',
        path: '/admin/add-products' })
}

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('admin/products',{
            prods : products,
            pageTitle: 'Products',
            path: '/admin/products',
            hasProducts: products.length > 0})
    })
}

exports.postAddProducts = (req,res,next) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price

    const product = new Product (title, imageUrl, description, price)
    
    
    product.save();
    res.redirect('/')
}


// exports.getEditProduct = (req,res,next)=>{
    
//     res.render('admin/edit-product',{
        
//         pageTitle: 'edit Product',
//         path: '/admin/edit-products'})
    
// }