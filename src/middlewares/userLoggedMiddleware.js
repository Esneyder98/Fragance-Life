const User = require('../model/User');

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = await User.findByEmail(emailInCookie);
// si tengo el usuario de la cookie  paso ese usuario a sesion
	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}
//si tengo a aolguin logueado quiero mostrar una porcion del navbar
	if (req.session.userLogged) {
		res.locals.isLogged = true;
		//paso lo que tengo en sesion a un variable local
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;