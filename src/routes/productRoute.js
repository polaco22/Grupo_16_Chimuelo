// Módulos
const express = require('express');
const router = express.Router();
//multer
const multer = require('multer');
const path = require('path');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

// Require Controller
const productController = require('../controllers/productController');

// Seteando la ruta de vista

router.get('/product', productController.show); // listado de productos
router.get('/product/cart', productController.productCart); // 8 - CARRITO
router.get('/product/detail/:id', productController.productDetail); // detalle de un producto particular ??
router.get('/product/create', productController.productCreate); // formulario creación
router.post('/product', upload.single('image'), productController.store); // acción de creación (a donde se envía el formulario)
router.get('/product/edit/:id', productController.productEdit); // formulario de edición de productos ??
router.put('/product/update/:id', upload.single('image'), productController.update); // a dónde se envía el formulario ??
router.delete('/product/:id', productController.productDelete); // acción de borrado


// Exports Router
module.exports = router;