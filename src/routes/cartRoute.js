// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const cartController = require('../controllers/cartController');

// Seteando la ruta de vista
router.get('/cart/:id', cartController.index); // 
router.post('/cart/add', cartController.addToCart); // 
router.post('/update/:id', cartController.updateCart); //  

// Exports Router
module.exports = router;