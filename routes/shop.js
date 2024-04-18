const path = require('path')
const express = require('express');

const routerShop = express.Router();


routerShop.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports = routerShop