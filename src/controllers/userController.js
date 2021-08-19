const path = require('path');
const fs = require('fs');
//const user = require('../models/userModel');
const {validationResult} = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req,res) => { 
        res.render('register')
    },
    // show: (req,res) => { 
    //     res.render("user",{list: user.all()} )
    // },
    show: (req, res) => {
        db.User.findAll()
        .then(users => {
            res.render("user",{list: users} )
        })
    },
    // userProfile: (req,res) => { 
    //     res.render('userProfile', { listToShow: user.one(req.params.id) });
    // },
    userProfile: async function (req, res){
        let user = await db.User.findByPk(req.params.id)
        res.render("userProfile", {
            listToShow: user
        })
    },
    login: (req,res) => { 
        res.render('login')
    },
    // save: (req,res) => {
    //     let errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         res.render('register', { errors: errors.mapped(), old: req.body})
    //     } else {
    //     user.create(req.body, req.file);
    //     return res.redirect ('/login');
    //     }
    // },
    save: async function (req,res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('register', { errors: errors.mapped(), old: req.body})
        } else {
        let user = await db.User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            dni: req.body.dni,
            email: req.body.email,
            domicilio: req.body.domicilio,
            provincia: req.body.provincia,
            ciudad: req.body.ciudad,
            password: bcryptjs.hashSync(req.body.password,10),
            avatar: req.file === undefined ? "default.jpg" : req.file.filename,
            admin: String(req.body.email).includes("@lookingood") ? true : false,
        })
        return res.redirect ('/login');
        }
    },
    acess: async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("login",{ errors: errors.mapped(), old:req.body });
        }else{
            let userToSession = await db.User.findOne({where: {email: req.body.email}});
            if(req.body.remember){
                res.cookie("email",req.body.email,{maxAge:300000})
        }
        req.session.user = userToSession;
        return res.redirect("/")
        }
    },
    // userEdit: (req, res) => {
    //     res.render('userEdit', {listToEdit: user.one(req.params.id)})
    // },
    userEdit: async (req, res) => {
        let user = await db.User.findByPk(req.params.id);
        res.render('userEdit', {listToEdit: user })
    },
    // update: (req, res) => {
    //     let result = user.edit(req.body,req.file,req.params.id);
    //     return result == true ? res.redirect ('/users'):res.send('No editaste nada'); 
    // },
    update: async function (req, res) {
        let userId = req.params.id;
        await db.User.update({
            fullName: req.body.fullName,
            userName: req.body.userName,
            dni: req.body.dni,
            email: req.body.email,
            domicilio: req.body.domicilio,
            provincia: req.body.provincia,
            ciudad: req.body.ciudad,
            password: bcryptjs.hashSync(req.body.password,10),
            avatar: req.file === undefined ? "default.jpg" : req.file.filename,
            admin: String(req.body.email).includes("@lookingood") ? true : false,
        },
        {where: {
            id: userId,
        }});
        return res.redirect('/users')
    },
    // userDelete: (req, res) => {
    //     let result = user.delete(req.params.id);
    //     return result == true ? res.redirect ('/users') : res.send('No eliminaste nada'); 
    // },
     userDelete: async function (req,res) {
        let userId = req.params.id;
        await db.User.destroy(
        {where: {
            id: userId,
        }});
        return res.redirect('/users')
    },
    logout: (req, res) => {
		res.clearCookie('email');
		req.session.destroy();
		return res.redirect('/');
	} 
}

module.exports = userController;