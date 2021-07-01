const path = require('path');
const fs = require('fs');
const product = require('../models/productModel');


const productController = {
    
    show: (req,res) => { res.render("product",{list: product.all()} )},



    productCart: (req,res) => { res.render('productCart')},
    productDetail: (req,res) => { res.render('productDetail')},
    productCreate: (req, res) => {res.render('productCreate')},
    productEdit: (req, res) => {res.render('productEdit')},
    productDelete: (req, res) => {res.send ("Producto elimindado")},
}

module.exports = productController;