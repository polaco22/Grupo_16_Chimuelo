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

    productDetail: (req,res) => { 
        res.render('productDetail', { listToShow: product.one(req.params.id) });
    },


    productCart: (req,res) => { res.render('productCart')},
    
    
    
    productDelete: (req, res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect ('/product'):res.send('No eliminaste nada'); 
    },
}

module.exports = productController;