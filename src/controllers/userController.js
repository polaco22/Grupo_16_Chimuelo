const path = require('path');
const fs = require('fs');
const user = require('../models/userModel');



const userController = {
    register: (req,res) => { 
        res.render('register')
    },
    show: (req,res) => { 
        res.render("user",{list: user.all()} )
    },
    userProfile: (req,res) => { 
        res.render('userProfile', { listToShow: user.one(req.params.id) });
    },
    login: (req,res) => { 
        res.render('login')
    },
    save: (req,res) => {
        let result = user.create(req.body, req.file);
        return result == true ? res.redirect ('/users') : res.send('No cargaste nada');
    },
    userEdit: (req, res) => {
        res.render('userEdit', {listToEdit: user.one(req.params.id)})
    },
    update: (req, res) => {
        let result = user.edit(req.body,req.file,req.params.id);
        return result == true ? res.redirect ('/users'):res.send('No editaste nada'); 
    },
    userDelete: (req, res) => {
        let result = user.delete(req.params.id);
        return result == true ? res.redirect ('/users') : res.send('No eliminaste nada'); 
    }    
}

module.exports = userController;