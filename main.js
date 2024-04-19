const express = require('express');
const bodyParser = require('body-parser')
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const app = express();


app.set('view engine','pug')
app.use(bodyParser.urlencoded())
app.use('/admin',adminData.routerAdmin)
app.use(shopRoutes)
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    res.render('404')
    
})

app.listen(3000);