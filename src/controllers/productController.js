const path = require('path');
const fs = require('fs');
// constantes JSON
//const product = require('../models/productModel');
//const colorModel = require('../models/colorModel.js');
//const categoryModel = require('../models/categoryModel.js');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// constantes DB
// const products = db.Product;
// const colors =  db.Color;
// const categories = db.Category;

const productController = {

    // show: (req,res) => { 
    //     res.render("product",{list: product.all()} )
    // },
    show: async (req, res) => {
        
        //let imagenes = await db.Imagen.findAll();
        let products = await db.Product.findAll( {include: [ "imagenes"]});
        //res.send(products[1].imagenes[1].file)
        res.render("product", { list: products})
            
    },
    // productCreate: (req, res) => {
    //     res.render('productCreate', {colors:colorModel.all(),categories:categoryModel.all()})
    // },
    productCreate: async function (req, res) {
        let color = await db.Color.findAll();
        let category = await db.Category.findAll();
        res.render('productCreate', { colors: color, categories: category })
    },
    // store: (req,res) => {
    //     let result = product.new(req.body,req.files);
    //     return result == true ? res.redirect ('/'):res.send('No cargaste nada');
    // },
    store: async function (req, res) {
        try {
            let product = await db.Product.create({
                name: req.body.name,
                description: req.body.description,
                category_id: req.body.category,
                colors_id: req.body.colors,
                //image: req.file === undefined ? "default.jpg" : req.file.filename,
                price: req.body.price,
                stock: req.body.stock,
            });
            
            let images = req.files;
            await images.forEach(img => {
                db.Imagen.create({
                    file: img.filename,
                    product_id: product.id
                })
            });
            res.redirect ('/')
        }
        catch (error) { console.log(error) }
    },
    // productEdit: (req, res) => {        
    //     res.render('productEdit', {listToEdit: product.one(req.params.id), colors:colorModel.all(),categories:categoryModel.all()} )
    productEdit: async function (req, res) {
        let product = await db.Product.findByPk(req.params.id);
        let color = await db.Color.findAll();
        let category = await db.Category.findAll();
        res.render('productEdit', { listToEdit: product, colors: color, categories: category })
    },
    // update: (req, res) => {
    //     let result = product.edit(req.body,req.files,req.params.id);
    //     return result == true ? res.redirect ('/'):res.send('No editaste nada'); 
    // },
    update: async function (req, res) {
        let productId = req.params.id;
        await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            colors_id: req.body.colors,
            //image: req.file === undefined ? "default.jpg" : req.file.filename,
            price: req.body.price,
            stock: req.body.stock
        },
            {
                where: {
                    id: productId,
                }
            });
        return res.redirect('/')
    },

    // productDetail: (req,res) => { 
    //     res.render('productDetail', { listToShow: product.one(req.params.id) });
    // },

    productDetail: async function (req, res) {
        let product = await db.Product.findByPk(req.params.id, {include: [ "imagenes"]});
        res.render('productDetail', { listToShow: product });
    },

    // productDelete: (req, res) => {
    //     let result = product.delete(req.params.id);
    //     return result == true ? res.redirect ('/product'):res.send('No eliminaste nada'); 
    // },
    productDelete: async function (req, res) {
        try {
            let productId = req.params.id;
            let productToDelete = await db.Product.findByPk(productId, {include: [ "imagenes"]});
            let deleted = await productToDelete.destroy()

            //console.log("aaaaaaaa", productToDelete)
            return res.redirect('/product')

    }
        catch (error) { console.log(error) }
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
}

module.exports = productController;