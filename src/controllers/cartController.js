const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");


const cartController = {
    index: async (req,res) => { 
         try {
            const products = await db.Product.findAll({include: [ "imagenes"]});
            const user = await db.User.findOne(req.body.user);
            const shopping = await db.Cart.findAll({where: {userId: user.id}});
            //res.send({products: products, user: user, shopping: shopping});
            res.render("productCart",{title: 'Cart', products: products, user: user, shopping: shopping});
            } 
        catch (err) { 
            console.log(err)}
        },

    addToCart: async (req,res) => { 
        try {   
            const product = await db.Product.findByPk(req.body.product);
            const shopping = await db.Cart.create({
                productId: product.id,
                userId: req.body.user,
                date: Date.now(), 
                price: product.price,
                quantity: req.body.quantity,
                active: false,
            })
            res.send(req.body)
            } 
        catch (err) { 
            console.log(err)}
        }, 

    updateCart: async (req,res) => { res.send({data: req.body, id: req.params.id})},
}

module.exports = cartController;