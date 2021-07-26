const { check } = require("express-validator");
const bcryptjs = require("bcryptjs");
const userModel = require("../models/userModel");

module.exports = [
check("email")
    .isEmail().withMessage('Ingrese un correo electrónico')
    .custom(value => {
    let registered = userModel.findByEmail(value);

    if (!registered) {
    return Promise.reject('Email no encontrado');
    }
    return true
}),
check("password")
    .notEmpty().withMessage('Ingrese una contraseña válida')
    .custom((value, { req }) => {

    let registered = userModel.findByEmail(req.body.email);

    if (bcryptjs.compareSync(value, registered.password) != true) {
    return Promise.reject('La contraseña no coincide');
    }
    return true;
})
]
