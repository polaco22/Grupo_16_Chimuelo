// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const userController = require('../controllers/userController');

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
router.get('/login', userController.login);
router.post('/', upload.single('avatar'), userController.save);

// Exports Router
module.exports = router;