const path = require('path');
const fs = require('fs');
const product = require('../models/productModel');


const productController = {
    
    show: (req,res) => { res.render("product",{list: product.all()} )},
    productCreate: (req, res) => {res.render('productCreate')},
    store: (req,res) => {
        let result = product.new(req.body,req.file);
        return result == true ? res.redirect ('/'):res.send('No cargaste nada');
    },

    productEdit: (req, res) => {res.render('productEdit', {listToEdit: product.one(req.params.id)} )},
    update: (req, res) => {
        let result = product.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect ('/'):res.send('No editaste nada'); 
    },



    productCart: (req,res) => { res.render('productCart')},
    productDetail: (req,res) => { res.render('productDetail')},
    
    
    productDelete: (req, res) => {res.send ("Producto eliminado")},
}

module.exports = productController;