const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
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
        //res.send(products)
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
            let errors = validationResult(req);
            let color = await db.Color.findAll();
            let category = await db.Category.findAll();
            if (!errors.isEmpty()) {
                res.render('productCreate', { errors: errors.mapped(), old: req.body, colors: color, categories: category})
            } 
            let product = await db.Product.create({
                name: req.body.name,
                description: req.body.description,
                category_id: req.body.category,
                colors_id: req.body.colors,
                //image: req.file === undefined ? "default.jpg" : req.file.filename,
                price: req.body.price,
                stock: req.body.stock,
            })            
            let images = req.files;
            if(images.length > 0){ 
                await images.forEach(img => {
                    db.Imagen.create({
                        file: img.filename,
                        product_id: product.id
                    })
                }
            )} else { 
                await db.Imagen.create({
                        file: "default.jpg",
                        product_id: product.id
                    })
            }
            //console.log("aaaa",images);
            res.redirect ('/')
        }
        catch (error) { console.log(error) }
    },
    // productEdit: (req, res) => {        
    //     res.render('productEdit', {listToEdit: product.one(req.params.id), colors:colorModel.all(),categories:categoryModel.all()} )
    productEdit: async function (req, res) {
        let product = await db.Product.findByPk(req.params.id, {include: [ "imagenes"]});
        let color = await db.Color.findAll();
        let category = await db.Category.findAll();
        //res.send(product)
        res.render('productEdit', { listToEdit: product, colors: color, categories: category })
    },
    // update: (req, res) => {
    //     let result = product.edit(req.body,req.files,req.params.id);
    //     return result == true ? res.redirect ('/'):res.send('No editaste nada'); 
    // },
    update: async function (req, res) {
        let errors = validationResult(req);
        let color = await db.Color.findAll();
        let category = await db.Category.findAll();
        if (!errors.isEmpty()) {
            res.render('productCreate', { errors: errors.mapped(), old: req.body, colors: color, categories: category})
        } 
        let productId = req.params.id;
        let productEdited = await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            colors_id: req.body.colors,
            price: req.body.price,
            stock: req.body.stock
        },
            {
                where: {
                    id: productId,   
                }
            });
  
        let newImg = req.files;
        let product = await db.Product.findByPk(req.params.id);
        let oldImg = await product.getImagenes();        
        let imgEdited = await oldImg.forEach(img => { db.Imagen.destroy({where: {id: img.id}})});
        let newImages =  await newImg.forEach(img => { db.Imagen.create({file: img.filename, product_id: product.id})});
        return res.redirect('/')



        // await newImg.forEach((img, index) => {
        //     db.Imagen.update({
        //         file: img.filename,
        //     },
        //     {
        //         where: {
        //             id: imgIdToEdit[index],
        //             product_id: productId
        //         }
        //     })});     
           
        //res.send({product, oldImg, newImg, imgIdToEdit})
        
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
}


module.exports = productController;