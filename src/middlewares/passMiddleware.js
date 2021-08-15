const userModel = require("../models/userModel");

module.exports = (req, res, next) => {
    if (req.body.password == req.body.confirmarContraseña) {
      return next();
    } else {
       res.send("Hubo un error al confirmar su contraseña") 
    }
    
  }