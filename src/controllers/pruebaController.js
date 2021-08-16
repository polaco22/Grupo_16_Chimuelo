const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;

Product.findByPk(2).then(data => console.log(data.colors_id));