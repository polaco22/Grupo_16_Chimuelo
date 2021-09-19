// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const productApiController = require('../../controllers/api/productApiController');

// Seteando la ruta de vista
router.get('/api/products', productApiController.index); 
router.get('/api/products/:id', productApiController.show); 
 

// Exports Router
module.exports = router;