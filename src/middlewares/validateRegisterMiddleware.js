const { check } = require('express-validator');
const userModel = require("../models/userModel");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = db.User
const path = require('path');

module.exports = [
    check('fullName')
        .notEmpty().withMessage('Por favor ingrese su nombre completo !!')
        .isLength({min:2}).withMessage('Su nombre completo debe tener al menos 2 caracteres'),
    check('userName')
        .notEmpty().withMessage('Por favor escoja un nombre de usuario !!')
        .isLength({min:2}).withMessage('Su nombre de usuario debe tener al menos 2 caracteres'),
    check('email')
        .notEmpty().withMessage('El campo Email debe ser completado !!')
        .isEmail().withMessage('Por favor ingrese un correo electrónico válido !!').bail()
        .isLength({min:5}).withMessage('El correo debe tener al menos 5 caracteres')
        .custom(async value => {
            let registered = await db.User.findOne({where: {email: value}});
            if (registered && !registered.admin) {
            return Promise.reject('El Email ya existe');
            }
            return true
        }),
    check('password')
        .notEmpty().withMessage('Por favor ingrese una contraseña !!')
        .isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Su contraseña deberá tener al menos 8 caracteres e incluir letras mayúsculas, minúsculas, número y carácter especial.'),
    check('confirmarContraseña')
        .custom( (value, { req }) => {
            if(req.body.password !== req.body.confirmarContraseña){
                return Promise.reject('Hubo un error al confirmar su password')
            }
            return true;
        }),
    check('avatar')
        .custom( (value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg','.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
                 if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                };
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
