// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const userApiController = require('../../controllers/api/userApiController');

// Seteando la ruta de vista
router.get('/api/users', userApiController.index); 
router.get('/api/users/:id', userApiController.show); 
 

// Exports Router
module.exports = router;