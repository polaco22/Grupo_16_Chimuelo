// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const productController = require('../controllers/productController');

// Seteando la ruta de vista
router.get('/product', productController.product);
router.get('/product/cart', productController.productCart);
router.get('/product/detail', productController.productDetail);
router.get('/product/create', productController.productCreate);
router.get('/product/edit', productController.productEdit);

// Exports Router
module.exports = router;