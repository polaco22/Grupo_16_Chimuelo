const path = require('path');

const productController = {
    product: (req,res) => { res.render('product')},
    productCart: (req,res) => { res.render('productCart')},
    productDetail: (req,res) => { res.render('productDetail')},
    productCreate: (req, res) => {res.render('productCreate')},
    productEdit: (req, res) => {res.render('productEdit')}
}

module.exports = productController;