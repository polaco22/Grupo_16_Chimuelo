const { check } = require("express-validator");
const bcryptjs = require("bcryptjs");
//const userModel = require("../models/userModel");

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//db.User.findByPk(1).then(data => console.log(data.password));

module.exports = [
check("email")
    .isEmail().withMessage('Ingrese un correo electrónico')
    .custom(value => {
    let registered = db.User.findByPk(value);

    if (!registered) {
    return Promise.reject('Email no encontrado');
    }
    return true
}),

check("password")
    .notEmpty().withMessage('Ingrese una contraseña válida')
    .custom((value, { req }) => {
    let registered = db.User.findByPk(req.body.email).then(data => console.log(data.password).catch(error => res.send(error)));
    if (bcryptjs.compareSync(value, registered) != true) {
    return Promise.reject('La contraseña no coincide');
    }
    return true
})
]