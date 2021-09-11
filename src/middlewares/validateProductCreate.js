const { check } = require('express-validator');
const path = require('path');


module.exports = [
    check('name')
        .notEmpty().withMessage('Por favor ingrese nombre del producto !!')
        .isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    check('description')
        .notEmpty().withMessage('Por favor agregue una descripción al producto!!')
        .isLength({min:20}).withMessage('La descripción del producto debe tener al menos 20 caracteres'),
    check('image')
        .custom( (value, { req }) => {
            let files = req.files;
            let acceptedExtensions = ['.jpg','.png', '.gif'];
            for (let i = 0; i < files.length; i++) {
            let filesExtension = path.extname(files[i].originalname);
                 if (!acceptedExtensions.includes(filesExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }};
            return true})
]
