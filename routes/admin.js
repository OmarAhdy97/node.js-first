const path = require('path')
const express = require('express');
const routerAdmin = express.Router();


routerAdmin.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))

});

routerAdmin.post('/add-product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
});



module.exports = routerAdmin;