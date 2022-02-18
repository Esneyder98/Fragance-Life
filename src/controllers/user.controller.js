const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const User = require(path.join(__dirname,'../model/User'));

const controller ={

	register:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/register.ejs"))
	},
	processRegister: async (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render(path.join(__dirname, "../views/users/register.ejs"), {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
//verifico si enxiste un usuario previamente con el mismo correo
		
		let userInDB = await User.findByEmail(req.body.email)
		
		if (userInDB) {
			return res.render(path.join(__dirname, "../views/users/register.ejs"), {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				}	
			});
		}else{
			let userToCreate = {
				document : req.body.document,
				name : req.body.names,
				surname : req.body.surnames,
				email : req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				category_id : req.body.category,
				avatar: req.file.filename
			}
	
			let userCreated = User.create(userToCreate);
			return res.render(path.join(__dirname, "../views/users/login.ejs"))
		}
		
	},
	login:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },
    loginProcess: async (req, res) => {
		//verifico si existe ese usuario
		let userToLogin = await User.findByEmail(req.body.email);
        if(userToLogin) {
			//si existe  valido la contraseña
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				//elimino la clave por seguridad
				delete userToLogin.password;
				//conservar la sesion del usuario
				req.session.userLogged = userToLogin;
				// si en el body viene remenber_user
				 if(req.body.remember_user) {
				// 	//seteo una cookie guardando la propiedad email que dure 2 min
				 	res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				 }
			
			return res.redirect("profile")
			} 

			if(req.body.category == "administrador") {
				return res.render('/listaProductos');
			} else {
				 res.render("profile");
			}

 			return res.render(path.join(__dirname, "../views/users/login.ejs"), {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render(path.join(__dirname, "../views/users/login.ejs"), {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
    },
    profile: (req, res) => {
		return res.render(path.join(__dirname, "../views/users/userProfile.ejs"), {
			user: req.session.userLogged	
		});
	},
	logout: (req, res) => {
		//elimino la cookie para poderme desloguear
		res.clearCookie('userEmail');
	// borro lo que este en sesion
		req.session.destroy();
		return res.redirect('/');
	},
	edit: async (req, res) => {
		let userLogged = await User.findByPk(req.params.id)
		
		return res.render(path.join(__dirname, "../views/users/editProfile.ejs"),{user: userLogged})
	},
	processEdit : (req, res) => {
		let userToEdit = {
			document : req.body.document,
			name : req.body.names,
			surname : req.body.surnames,
			email : req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userEdited = User.update(userToEdit, req.params.id);
		
		return res.render(path.join(__dirname, "../views/users/login.ejs"), { user : req.body});
	}
}

module.exports = controller;