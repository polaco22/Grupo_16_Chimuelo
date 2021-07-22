const path = require('path');
const fs = require('fs');
const product = require('../models/productModel');
const colorModel = require('../models/colorModel.js');
const categoryModel = require('../models/categoryModel.js');



const productController = {
    
    show: (req,res) => { res.render("product",{list: product.all()} )},
    productCreate: (req, res) => {res.render('productCreate', {colors:colorModel.all(),categories:categoryModel.all()})},
    store: (req,res) => {
        let result = product.new(req.body,req.files);
        return result == true ? res.redirect ('/'):res.send('No cargaste nada');
    },

    productEdit: (req, res) => {res.render('productEdit', {listToEdit: product.one(req.params.id), colors:colorModel.all(),categories:categoryModel.all()} )},
    update: (req, res) => {
        let result = product.edit(req.body,req.files,req.params.id);
        return result == true ? res.redirect ('/'):res.send('No editaste nada'); 
    },

    productDetail: (req,res) => { 
        res.render('productDetail', { listToShow: product.one(req.params.id) });
    },

    productDelete: (req, res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect ('/product'):res.send('No eliminaste nada'); 
    },
    productCart: (req,res) => { res.send('Carrito en ensamble')},
}

module.exports = productController;