// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const userController = require('../controllers/userController');

// Seteando la ruta de vista
router.get('/register', userController.register);
router.get('/login', userController.login);

// Exports Router
module.exports = router;