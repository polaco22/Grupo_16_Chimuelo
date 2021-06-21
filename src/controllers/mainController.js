const path = require('path');

const mainController = {
    home: (req,res) => { res.render('home')},
    register: (req,res) => { res.render(('register'))},
    login: (req,res) => { res.render(('login'))},
    product: (req,res) => { res.render('product')},
    productCart: (req,res) => { res.render('productCart')},
    productDetail: (req,res) => { res.render('productDetail')},
    productEdit: (req, res) => {res.render('productEdit')}
}

module.exports = mainController;