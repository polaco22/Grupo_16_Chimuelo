const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.User;

User.findAll().then(data => console.log(data));