// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const userController = require('../controllers/userController');

//Middleware
const validateRegister = require('../middlewares/validateRegisterMiddleware');
const validateLogIn = require('../middlewares/validateLogInMiddleware');


//Multer
const multer = require('multer');
const path = require('path');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname,"../../public/uploads","avatars"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

// Seteando la ruta de vista
router.get('/register', userController.register);
router.get('/users', userController.show); // listado de usuarios
router.get('/users/userProfile/:id', userController.userProfile); // Perfil del usuario
router.get('/login', userController.login);
router.post('/save', [upload.single('avatar'), validateRegister], userController.save);
router.post('/', validateLogIn, userController.acess);
router.get('/users/edit/:id', userController.userEdit); // formulario de edición de usuario
router.put('/users/update/:id', upload.single('avatar'), userController.update); 
router.delete('/users/userDelete/:id', userController.userDelete); // acción de borrar usuario

// Exports Router
module.exports = router;