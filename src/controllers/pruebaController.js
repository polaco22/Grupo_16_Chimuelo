const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Color = db.Color;

Color.findAll().then(data => console.log(data[0].name));