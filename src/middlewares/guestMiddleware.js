module.exports = (req, res, next) => {
	if (req.session.user && !res.locals.user.admin) {
		return res.redirect('/');
	}
	next();
}