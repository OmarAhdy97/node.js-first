const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded())
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
    
})





app.listen(3000);