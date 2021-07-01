const path = require('path');
const fs = require('fs');
const product = require('../models/mainModel');

const mainController = {
    index: (req,res) => { res.render("home",{list: product.all()} )},
}

module.exports = mainController;