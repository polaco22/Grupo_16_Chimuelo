const path = require('path');
const fs = require('fs');
const user = require('../models/userModel');


const userController = {
    register: (req,res) => { res.render('register')},
    login: (req,res) => { res.render('login')},
    save: (req,res) => {
        let result = user.create(req.body,req.file);
        return result == true ? res.redirect ('/'):res.send('No cargaste nada');}
}

module.exports = userController;