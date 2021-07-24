const { check } = require('express-validator');
const userModel = require("../models/userModel");

module.exports = [
    check('fullName').notEmpty().withMessage('Por favor ingrese su nombre completo !!'),
    check('userName').notEmpty().withMessage('Por favor escoja un nombre de usuario !!'),
    check('email')
        .isEmail().withMessage('Por favor ingrese un correo electrónico válido !!').bail()
        .isLength({min:5}).withMessage('El correo debe tener al menos 5 caracteres')
        .custom(value => {
            let registered = userModel.findByEmail(value);
            if (registered) {
            return Promise.reject('El Email ya existe');
            }
            return true
        })
]