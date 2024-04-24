const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(__filename), '..' ,'data', 'cart.json');

module.exports = class Cart {
    static prices;
    static productss;
    static addProduct(id,price){

        fs.readFile(p, (err,fileContent)=>{
            let cart = {products : [], totalPrice : 0}
            if (!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod=> prod.id === id);
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct;

            if (existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty +=1;
                cart.products=[...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id:id , qty:1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice= cart.totalPrice + +price
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err)
            })
            this.prices = cart.totalPrice;
            this.productss = cart.products;
        })
    }
}