const userModel = require("../models/userModel");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = db.User


module.exports = (req,res,next) => {
  let user = null;
  if(req.cookies && req.cookies.email){
    user = db.User.findOne({where: {email: req.cookies.email}})
    //user = userModel.findByEmail(req.cookies.email);
  }else if(req.session && req.session.user){
    user = req.session.user
  }
  res.locals.user = user; 
  next();
}

