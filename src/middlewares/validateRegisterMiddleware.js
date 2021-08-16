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
            if (registered && !registered.admin) {
            return Promise.reject('El Email ya existe');
            }
            return true
        }),
    check('confirmarContraseña')
        .custom( (value, { req }) => {

            if(req.body.password !== req.body.confirmarContraseña){
                return Promise.reject('Hubo un error al confirmar su password')
            }
            return true;
        }),
    check('terminos')
        .custom( (value, { req }) => {

            if(req.body.terminos !== "on"){
                return Promise.reject('Debe aceptar los términos y condiciones')
            }
            return true;
        })
]
