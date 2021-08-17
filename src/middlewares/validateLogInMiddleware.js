const { check } = require("express-validator");
const bcryptjs = require("bcryptjs");
//const userModel = require("../models/userModel");

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = db.User

module.exports = [
check("email")
    .isEmail().withMessage('Ingrese un correo electrónico')
    .custom(async value => {
    let registered = await db.User.findOne({where: {email: value}});

    if (!registered) {
    return Promise.reject('Email no encontrado');
    }
    return true
}),
check("password")
    .notEmpty().withMessage('Ingrese una contraseña válida')
    .custom( async (value, { req }) => {
    
    let registered = await db.User.findOne({where: {email: req.body.email}})
    
    let controlPass = bcryptjs.compareSync(value, registered.password)
       
    if (controlPass != true) {
    return Promise.reject('La contraseña no coincide');
    }
    return true
})
]