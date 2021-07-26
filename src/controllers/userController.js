const path = require('path');
const fs = require('fs');
const user = require('../models/userModel');
const {validationResult} = require('express-validator');


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
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('register', { errors: errors.mapped(), old: req.body})
        } else {
        user.create(req.body, req.file);
        return res.redirect ('/login');
        }
    },
    acess: (req, res) =>  {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("login",{ errors: errors.mapped(), old:req.body });
        }else{
            let userToSession = user.findByEmail(req.body.email);
            if(req.body.remember){
                res.cookie("email",req.body.email,{maxAge:300000})
        }
        req.session.user = userToSession;
        return res.redirect("/")
        }
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