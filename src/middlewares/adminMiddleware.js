module.exports = (req, res, next) => {
    if (res.locals.user.admin == 1) {
      return next();
    } else{
      return res.redirect("/")
    }
  }