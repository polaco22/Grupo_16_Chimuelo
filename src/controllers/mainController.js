const path = require('path');

const mainController = {
    home: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/home.html'))},
    register: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/register.html'))},
    login: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/login.html'))},
    product: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/product.html'))},
    productCart: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/productCart.html'))},
    productDetail: (req,res) => { res.sendFile(path.resolve(__dirname,'../views/productDetail.html'))},
}

module.exports = mainController;