module.exports = (req, res, next) => {
    if (res.locals.user.admin == true) {
      return next();
    } else{
      return res.redirect("/")
    }
  }