module.exports = (req, res, next) => {
	if (req.session.user && res.locals.user.admin != 1) {
		return res.redirect('/');
	}
	next();
}