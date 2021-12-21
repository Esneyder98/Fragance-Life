const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
//const {validationResult} = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = require(path.join(__dirname,'../model/User'));
const controller ={
	afterRegister:(req, res) =>{
        // res.render(path.join(__dirname, "../views/users/register.ejs"))
		let errors = validationResult(req);
		if(errors.isEmpty()) {
			res.redirect('/');
		} else {
			res.render(path.join(__dirname, "../views/users/register.ejs"), {errors: errors.array(), old: req.body});
		}

		let newUser={
            id: req.body.document,
            name : req.body.names,
            lastName: req.body.surnames,
            email: req.body.email,
            password: req.body.password,
			confirmpassword: req.body.confirmpassword,
			image: req.file.avatar
        }
        users.push(newUser);
        
        let nuevoUsuarioGuardar = JSON.stringify(users,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/usersDataBase.json'), nuevoUsuarioGuardar);
        res.redirect('/')
	},
	register:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/register.ejs"))
	},
	login:(req, res) =>{
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },
    loginProcess: (req, res) => {
		//verifico si existe ese usuario
		let userToLogin = User.findByField('email', req.body.email);
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

				return res.redirect('/');
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
    

}

module.exports = controller;