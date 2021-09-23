const path = require('path');
const fs = require('fs');
const product = require('../models/mainModel');

const mainController = {
    index: (req,res) => { res.render("home",{list: product.all()} )},
    aboutUs: (req,res) => { res.render("aboutUs")},
    contact: (req,res) => { res.render("contact")},

}

module.exports = mainController;